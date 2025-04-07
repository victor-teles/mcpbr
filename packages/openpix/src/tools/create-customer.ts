import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const CreateCustomerSchema = z.object({
  name: z.string().describe('The name of the customer'),
  email: z.string().optional().describe('The email of the customer'),
  phone: z.string().optional().describe('The phone of the customer'),
  taxID: z.string().describe('The taxID of the customer'),
  correlationID: z.string().optional().describe('The correlationID of the customer'),
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
export type CreateCustomer = z.infer<typeof CreateCustomerSchema>

const definition: Tool = {
  name: 'create-customer',
  inputSchema: toJsonSchema(CreateCustomerSchema),
  description: 'Create a new customer',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateCustomerSchema.parse(args)
  const url = `${baseUrl}/api/v1/customer`
  const options = {
    method: 'POST',
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

export const createCustomerTool = {
  definition,
  handler,
}
