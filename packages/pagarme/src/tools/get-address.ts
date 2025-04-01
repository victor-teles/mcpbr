import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetAddressSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  addressId: z.string().describe('Address ID'),
})
export type GetAddress = z.infer<typeof GetAddressSchema>

const definition: Tool = {
  name: 'get-address',
  inputSchema: toJsonSchema(GetAddressSchema),
  description: 'Get a address',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetAddressSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/addresses/${body.addressId}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Basic ${Buffer.from(`${params.apiKey}:`).toString('base64')}`,
    },
  }

  const response = await fetch(url, options)
  const address = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(address, null, 2) }],
  }
}

export const getAddressTool: CoreTool = {
  definition,
  handler,
}
