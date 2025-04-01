import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const CreateCardSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  number: z.string().describe('Card number. Max: 19 characters'),
  holderName: z.string().describe('Card holder name. Max: 64 characters'),
  holderDocument: z.string().describe('Card holder document. Max: 16 characters'),
  expMonth: z.number().describe('Card expiration month. Max: 12'),
  expYear: z.number().describe('Card expiration year'),
  cvv: z.string().describe('Card security code. Max: 4 characters'),
  brand: z.string().optional().describe('Card brand. Max: 16 characters'),
  label: z.string().optional().describe('Card label. Max: 16 characters'),
  billingAddressId: z.string().optional().describe('Billing address ID. Max: 36 characters'),
  billingAddress: z
    .object({
      line1: z.string().describe('Billing address line 1. Max: 256 characters'),
      line2: z.string().describe('Billing address line 2. Max: 128 characters'),
      zipCode: z.string().describe('Billing address zip code. Max: 16 characters'),
      city: z.string().describe('Billing address city. Max: 64 characters'),
      state: z.string().describe('Billing address state. Max: 2 characters'),
      country: z.string().describe('Billing address country. Max: 2 characters'),
    })
    .optional(),
  metadata: z.object({}).optional().describe('Key/value object used to store additional card information.'),
  token: z.string().optional().describe('Card token. Max: 16 characters'),
})
export type CreateCard = z.infer<typeof CreateCardSchema>

const definition: Tool = {
  name: 'create-card',
  inputSchema: toJsonSchema(CreateCardSchema),
  description: 'Create a card',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateCardSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/cards`
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

export const createCardTool: CoreTool = {
  definition,
  handler,
}
