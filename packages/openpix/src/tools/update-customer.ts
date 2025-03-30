import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const UpdateCustomerSchema = z.object({
  customerId: z.string().describe('The ID of the customer to update'),
  name: z.string().optional().describe('The name of the customer'),
  email: z.string().optional().describe('The email of the customer'),
  phone: z.string().optional().describe('The phone of the customer'),
  taxID: z.string().optional().describe('The taxID of the customer'),
  address: z
    .object({
      street: z.string().describe('The street of the customer'),
      number: z.string().describe('The number of the customer'),
      neighborhood: z.string().describe('The neighborhood of the customer'),
      city: z.string().describe('The city of the customer'),
      state: z.string().describe('The state of the customer'),
      complement: z.string().describe('The complement of the customer'),
      country: z.string().describe('The country of the customer'),
      zipcode: z.string().describe('The zipcode of the customer'),
    })
    .optional()
    .describe('The address of the customer'),
})
export type UpdateCustomer = z.infer<typeof UpdateCustomerSchema>

const definition: Tool = {
  name: 'update-customer',
  inputSchema: toJsonSchema(UpdateCustomerSchema),
  description: 'Update a customer',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = UpdateCustomerSchema.parse(args)
  const url = `${baseUrl}/api/v1/customer/${body.customerId}`
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const customer = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(customer, null, 2) }],
  }
}

export const updateCustomerTool = {
  definition,
  handler,
}
