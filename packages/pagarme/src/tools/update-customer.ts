import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const UpdateCustomerSchema = z.object({
  customerId: z.string().describe('Customer ID.'),
  name: z.string().max(64).describe('Customer name. Max: 64 characters.'),
  email: z.string().max(64).describe('Customer email. Max: 64 characters'),
  code: z.string().max(52).describe('Customer reference code in store system. Max: 52 characters'),
  document: z
    .string()
    .describe(
      'Customer CPF, CNPJ or PASSPORT. Max: 16 characters for CPF and CNPJ and Max: 50 characters for PASSPORT',
    ),
  documentType: z.enum(['CPF', 'CNPJ', 'PASSPORT']).describe('Document type. Possible values: CPF, CNPJ or PASSPORT.'),
  type: z
    .enum(['individual', 'company'])
    .describe('Customer type. Possible values: individual (natural person) or company (legal entity).'),
  gender: z.enum(['male', 'female']).describe('Customer gender. Possible values: male or female'),
  address: z.object({
    country: z.string().describe('Country (Country code in ISO 3166-1 alpha-2 format)(2 digits)'),
    state: z.string().describe('State (State code in ISO 3166-2 format).'),
    city: z.string().describe('City.'),
    zipCode: z.string().describe('Postal Code (ZIP) (Numbers only).'),
    line1: z
      .string()
      .describe(
        'Main address details. This field should contain Number, Street, District, in this order and separated by commas.',
      ),
    line2: z.string().describe('Additional address details. This field can contain complement, references.'),
  }),
  phones: z.object({
    homePhone: z.string().describe('Customer home phone.'),
    mobilePhone: z.string().describe('Customer mobile phone.'),
  }),
  birthdate: z.string().describe('Customer birth date.'),
  metadata: z.object({}).describe('Key/value object used to store additional customer information.'),
})
export type UpdateCustomer = z.infer<typeof UpdateCustomerSchema>

const definition: Tool = {
  name: 'update-customer',
  inputSchema: toJsonSchema(UpdateCustomerSchema),
  description: 'Update a customer',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/core/v5/customers/${args.customerId}`
  const options = {
    method: 'PUT',
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

export const updateCustomerTool: CoreTool = {
  definition,
  handler,
}
