import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetIbgeStateSchema = z.object({
  code: z.string().describe('The IBGE state code (e.g., SP for São Paulo)'),
})
export type GetIbgeState = z.infer<typeof GetIbgeStateSchema>

const definition: Tool = {
  name: 'get-ibge-state',
  inputSchema: toJsonSchema(GetIbgeStateSchema),
  description: 'Get information about a Brazilian state using its IBGE code',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetIbgeStateSchema.parse(args)
  const url = `${baseUrl}/ibge/uf/v1/${body.code}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }

  const response = await fetch(url, options)
  const result = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
  }
}

export const getIbgeStateTool: CoreTool = {
  definition,
  handler,
}
