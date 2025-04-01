import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const DeleteCardSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  cardId: z.string().describe('Card ID'),
})
export type DeleteCard = z.infer<typeof DeleteCardSchema>

const definition: Tool = {
  name: 'delete-card',
  inputSchema: toJsonSchema(DeleteCardSchema),
  description: 'Delete a card',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = DeleteCardSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/cards/${body.cardId}`
  const options = {
    method: 'DELETE',
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

export const deleteCardTool: CoreTool = {
  definition,
  handler,
}
