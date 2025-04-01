import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListAddressesSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  line1: z.string().describe('Address line 1. Max: 256 characters'),
  line2: z.string().optional().describe('Address line 2. Max: 128 characters'),
  zipCode: z.string().describe('Address zip code. Max: 16 characters'),
  city: z.string().describe('Address city. Max: 64 characters'),
  state: z.string().describe('Address state. Max: 2 characters'),
  country: z.string().describe('Address country. Max: 2 characters'),
  metadata: z.object({}).optional().describe('Key/value object used to store additional address information.'),
})
export type ListAddresses = z.infer<typeof ListAddressesSchema>

const definition: Tool = {
  name: 'list-addresses',
  inputSchema: toJsonSchema(ListAddressesSchema),
  description: 'List a addresses',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListAddressesSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/addresses`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Basic ${Buffer.from(`${params.apiKey}:`).toString('base64')}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const addresses = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(addresses, null, 2) }],
  }
}

export const listAddressTool: CoreTool = {
  definition,
  handler,
}
