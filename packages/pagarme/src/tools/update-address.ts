import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const UpdateAddressSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  addressId: z.string().describe('Address ID'),
  line2: z.string().optional().describe('Address line 2. Max: 128 characters'),
  metadata: z.object({}).optional().describe('Key/value object used to store additional address information.'),
})
export type UpdateAddress = z.infer<typeof UpdateAddressSchema>

const definition: Tool = {
  name: 'update-address',
  inputSchema: toJsonSchema(UpdateAddressSchema),
  description: 'Update a address',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = UpdateAddressSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/addresses/${body.addressId}`
  const options = {
    method: 'PUT',
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

export const updateAddressTool: CoreTool = {
  definition,
  handler,
}
