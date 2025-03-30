import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { CallToolRequestSchema, Tool as McpTool } from '@modelcontextprotocol/sdk/types.js'
import c from 'tinyrainbow'
import { z } from 'zod'

export type Tool = McpTool

export type CoreTool = {
  definition: Tool
  handler: (
    params: Record<string, unknown>,
    args: Record<string, unknown>,
  ) => Promise<{
    content: { type: string; text: string }[]
    isError?: boolean
  }>
}

export function mcpServerFactory(meta: { name: string; version: string }, params: Record<string, unknown>) {
  let server: Server

  function make(tools: CoreTool[]) {
    server = new Server(
      {
        name: meta.name,
        version: meta.version,
      },
      {
        capabilities: {
          tools: {},
        },
      },
    )

    server.setRequestHandler(CallToolRequestSchema, async (request) => {
      try {
        const tool = tools.find((tool) => tool.definition.name === request.params.name)

        if (!tool) {
          throw new Error(`Unknown tool: ${request.params.name}`)
        }

        return tool.handler(params, request.params.arguments ?? {})
      } catch (error) {
        console.log(error)
        if (error instanceof z.ZodError) {
          throw new Error(`Invalid input: ${JSON.stringify(error.errors)}`)
        }

        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        }
      }
    })
  }

  function start() {
    if (!server) {
      throw new Error('Server not initialized call make first')
    }

    async function runServer() {
      const transport = new StdioServerTransport()
      await server.connect(transport)

      console.error(c.green(`✅ ${meta.name} running on stdio`))
    }

    runServer().catch((error) => {
      console.error(c.red(`\n🚨  Error initializing ${meta.name} MCP server:\n`))
      console.error(c.yellow(`   ${error.message}\n`))
    })
  }

  return { make, start }
}
