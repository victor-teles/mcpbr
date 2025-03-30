import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCustomerSchema = z.object({
  customerId: z.string().describe('The ID of the customer to retrieve'),
})
export type GetCustomer = z.infer<typeof GetCustomerSchema>

const definition: Tool = {
  name: 'get-customer',
  inputSchema: toJsonSchema(GetCustomerSchema),
  description: 'Get a customer by ID',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCustomerSchema.parse(args)
  const url = `${baseUrl}/api/v1/customer/${body.customerId}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const customer = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(customer, null, 2) }],
  }
}

export const getCustomerTool = {
  definition,
  handler,
}
