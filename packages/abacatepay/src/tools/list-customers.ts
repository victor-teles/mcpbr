import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListCustomersSchema = z.object({})
export type ListCustomers = z.infer<typeof ListCustomersSchema>

const definition: Tool = {
  name: 'list-customers',
  inputSchema: toJsonSchema(ListCustomersSchema),
  description: 'List all customers',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/v1/customer/list`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const customers = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(customers, null, 2) }],
  }
}

const listCustomersTool: CoreTool = {
  definition,
  handler,
}

export { listCustomersTool }
