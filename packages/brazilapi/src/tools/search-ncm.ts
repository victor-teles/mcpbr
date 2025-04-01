import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const SearchNcmSchema = z.object({
  search: z.string().describe('The search term to find NCM codes'),
})
export type SearchNcm = z.infer<typeof SearchNcmSchema>

const definition: Tool = {
  name: 'search-ncm',
  inputSchema: toJsonSchema(SearchNcmSchema),
  description: 'Search for NCM (Nomenclatura Comum do Mercosul) codes by code or description',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = SearchNcmSchema.parse(args)
  const url = `${baseUrl}/ncm/v1?search=${encodeURIComponent(body.search)}`
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

export const searchNcmTool: CoreTool = {
  definition,
  handler,
}
