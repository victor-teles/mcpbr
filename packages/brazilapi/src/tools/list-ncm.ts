import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListNcmSchema = z.object({})
export type ListNcm = z.infer<typeof ListNcmSchema>

const definition: Tool = {
  name: 'list-ncm',
  inputSchema: toJsonSchema(ListNcmSchema),
  description: 'Get a list of all NCM (Nomenclatura Comum do Mercosul) codes',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListNcmSchema.parse(args)
  const url = `${baseUrl}/ncm/v1`
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

export const listNcmTool: CoreTool = {
  definition,
  handler,
}
