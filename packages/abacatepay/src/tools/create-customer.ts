import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const CreateCustomerSchema = z.object({
  name: z.string().describe('The full name of the customer'),
  email: z.string().describe('The email of the customer'),
  cellphone: z.string().describe('The phone number of the customer'),
  taxId: z.string().describe('The cpf or cnpj of the customer'),
})
export type CreateCustomer = z.infer<typeof CreateCustomerSchema>

const definition: Tool = {
  name: 'create-customer',
  inputSchema: toJsonSchema(CreateCustomerSchema),
  description: 'Create a customer',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateCustomerSchema.parse(args)
  const url = `${baseUrl}/v1/customer/create`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const customers = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(customers, null, 2) }],
  }
}

const createCustomerTool: CoreTool = {
  definition,
  handler,
}

export { createCustomerTool }
