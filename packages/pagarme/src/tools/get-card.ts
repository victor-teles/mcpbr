import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCardSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  cardId: z.string().describe('Card ID'),
})
export type GetCard = z.infer<typeof GetCardSchema>

const definition: Tool = {
  name: 'get-card',
  inputSchema: toJsonSchema(GetCardSchema),
  description: 'Get a card',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCardSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/cards/${body.cardId}`
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
  const card = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(card, null, 2) }],
  }
}

export const getCardTool: CoreTool = {
  definition,
  handler,
}
