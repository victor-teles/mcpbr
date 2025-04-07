import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListCustomersSchema = z.object({
  page: z.number().optional().describe('Page number.'),
  size: z.number().optional().describe('Number of records per page.'),
  name: z.string().optional().describe('Name of the customer.'),
  document: z.string().max(16).optional().describe('CPF or CNPJ of the customer. Max: 16 characters.'),
  email: z.string().optional().describe('Email of the customer.'),
  gender: z.enum(['male', 'female']).optional().describe('Gender of the customer. Possible values: male or female.'),
  code: z.string().optional().describe('Code of the customer in the store system.'),
})
export type ListCustomers = z.infer<typeof ListCustomersSchema>

const definition: Tool = {
  name: 'list-customers',
  inputSchema: toJsonSchema(ListCustomersSchema),
  description: 'List customers',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/core/v5/customers?page=${args.page}&size=${args.size}`
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
