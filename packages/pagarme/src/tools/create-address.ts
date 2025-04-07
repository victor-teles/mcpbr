import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const CreateAddressSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  line1: z.string().describe('Address line 1. Max: 256 characters'),
  line2: z.string().optional().describe('Address line 2. Max: 128 characters'),
  zipCode: z.string().describe('Address zip code. Max: 16 characters'),
  city: z.string().describe('Address city. Max: 64 characters'),
  state: z.string().describe('Address state. Max: 2 characters'),
  country: z.string().describe('Address country. Max: 2 characters'),
  metadata: z.object({}).optional().describe('Key/value object used to store additional address information.'),
})
export type CreateAddress = z.infer<typeof CreateAddressSchema>

const definition: Tool = {
  name: 'create-address',
  inputSchema: toJsonSchema(CreateAddressSchema),
  description: 'Create a address',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateAddressSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/addresses`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Basic ${Buffer.from(`${params.apiKey}:`).toString('base64')}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const address = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(address, null, 2) }],
  }
}

export const createAddressTool: CoreTool = {
  definition,
  handler,
}
