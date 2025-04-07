import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListCardsSchema = z.object({
  customerId: z.string().describe('Customer ID'),
})
export type ListCards = z.infer<typeof ListCardsSchema>

const definition: Tool = {
  name: 'list-cards',
  inputSchema: toJsonSchema(ListCardsSchema),
  description: 'List cards',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListCardsSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/cards`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Basic ${Buffer.from(`${params.apiKey}:`).toString('base64')}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const cards = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(cards, null, 2) }],
  }
}

export const listCardsTool: CoreTool = {
  definition,
  handler,
}
