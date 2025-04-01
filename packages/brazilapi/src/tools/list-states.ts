import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListStatesSchema = z.object({
  code: z.string().optional().describe('State code to look up (optional)'),
})
export type ListStates = z.infer<typeof ListStatesSchema>

const definition: Tool = {
  name: 'list-states',
  inputSchema: toJsonSchema(ListStatesSchema),
  description: 'Get information about Brazilian states',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/ibge/uf/v1`
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

export const listStatesTool: CoreTool = {
  definition,
  handler,
}
