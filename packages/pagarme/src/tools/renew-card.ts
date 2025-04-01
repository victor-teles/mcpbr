import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const RenewCardSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  cardId: z.string().describe('Card ID'),
})
export type RenewCard = z.infer<typeof RenewCardSchema>

const definition: Tool = {
  name: 'renew-card',
  inputSchema: toJsonSchema(RenewCardSchema),
  description: 'Renew a card',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = RenewCardSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/cards/${body.cardId}/renew`
  const options = {
    method: 'POST',
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

export const renewCardTool: CoreTool = {
  definition,
  handler,
}
