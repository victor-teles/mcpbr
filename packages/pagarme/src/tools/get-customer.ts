import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCustomerSchema = z.object({
  customerId: z.string().describe('Customer ID.'),
})
export type GetCustomer = z.infer<typeof GetCustomerSchema>

const definition: Tool = {
  name: 'get-customer',
  inputSchema: toJsonSchema(GetCustomerSchema),
  description: 'Get a customer',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/core/v5/customers/${args.customerId}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Basic ${Buffer.from(`${params.apiKey}:`).toString('base64')}`,
    },
  }

  const response = await fetch(url, options)
  const customer = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(customer, null, 2) }],
  }
}

export const getCustomerTool: CoreTool = {
  definition,
  handler,
}
