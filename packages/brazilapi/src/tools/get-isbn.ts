import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetIsbnSchema = z.object({
  isbn: z.string().describe('The ISBN code to look up'),
})
export type GetIsbn = z.infer<typeof GetIsbnSchema>

const definition: Tool = {
  name: 'get-isbn',
  inputSchema: toJsonSchema(GetIsbnSchema),
  description: 'Get information about a book using its ISBN code',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetIsbnSchema.parse(args)
  const url = `${baseUrl}/isbn/v1/${body.isbn}`
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

export const getIsbnTool: CoreTool = {
  definition,
  handler,
}
