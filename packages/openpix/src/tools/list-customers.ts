import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListCustomersSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
})
export type ListCustomers = z.infer<typeof ListCustomersSchema>

const definition: Tool = {
  name: 'list-customers',
  inputSchema: toJsonSchema(ListCustomersSchema),
  description: 'Get a list of customers with pagination support',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListCustomersSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip !== undefined) queryParams.append('skip', body.skip.toString())
  if (body.limit !== undefined) queryParams.append('limit', body.limit.toString())

  const url = `${baseUrl}/api/v1/customer?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const customers = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(customers, null, 2) }],
  }
}

export const listCustomersTool = {
  definition,
  handler,
}
