import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const CreatePaymentSchema = z.object({
  frequency: z.enum(['ONE_TIME']).default('ONE_TIME').describe('The frequency of the payment'),
  methods: z
    .array(z.enum(['PIX']))
    .default(['PIX'])
    .describe('The methods of the payment'),
  products: z
    .array(
      z.object({
        externalId: z.string().describe('Your internal id for the product'),
        name: z.string().describe('The name of the product'),
        description: z.string().describe('The description of the product').optional(),
        price: z.number().describe('The price of the product in cents').int().min(100),
        quantity: z.number().describe('The quantity of the product').int().min(1),
      }),
    )
    .describe('The products of the payment'),
  returnUrl: z.string().describe('The url to redirect the customer when they click in "Back" button'),
  completionUrl: z.string().describe('The url to redirect the customer when payment is completed with success'),
  customerId: z.string().describe('The id of the customer').optional(),
  customer: z
    .object({
      name: z.string().describe('The name of the customer'),
      email: z.string().describe('The email of the customer'),
      taxId: z.string().describe('The tax id of the customer'),
      cellphone: z.string().describe('The phone number of the customer'),
    })
    .optional(),
})
export type CreatePayment = z.infer<typeof CreatePaymentSchema>

const definition: Tool = {
  name: 'create-payment',
  inputSchema: toJsonSchema(CreatePaymentSchema),
  description: 'Create a payment',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/v1/billing/create`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
    body: JSON.stringify(args),
  }

  const response = await fetch(url, options)
  const customers = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(customers, null, 2) }],
  }
}

const createPaymentTool: CoreTool = {
  definition,
  handler,
}

export { createPaymentTool }
