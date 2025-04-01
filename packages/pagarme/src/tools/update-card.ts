import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const UpdateCardSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  cardId: z.string().describe('Card ID'),
  holderName: z.string().optional().describe('Card holder name. Max: 64 characters'),
  holderDocument: z.string().optional().describe('Card holder document. Max: 16 characters'),
  expMonth: z.number().describe('Card expiration month. Max: 12'),
  expYear: z.number().describe('Card expiration year'),
  billingAddressId: z.string().optional().describe('Billing address ID. Max: 36 characters'),
})
export type UpdateCard = z.infer<typeof UpdateCardSchema>

const definition: Tool = {
  name: 'update-card',
  inputSchema: toJsonSchema(UpdateCardSchema),
  description: 'Update a card',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = UpdateCardSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/cards/${body.cardId}`
  const options = {
    method: 'PUT',
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

export const updateCardTool: CoreTool = {
  definition,
  handler,
}
