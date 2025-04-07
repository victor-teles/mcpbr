import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const DeleteAddressSchema = z.object({
  customerId: z.string().describe('Customer ID'),
  addressId: z.string().describe('Address ID'),
})
export type DeleteAddress = z.infer<typeof DeleteAddressSchema>

const definition: Tool = {
  name: 'delete-address',
  inputSchema: toJsonSchema(DeleteAddressSchema),
  description: 'Delete a address',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = DeleteAddressSchema.parse(args)
  const url = `${baseUrl}/core/v5/customers/${body.customerId}/addresses/${body.addressId}`
  const options = {
    method: 'DELETE',
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

export const deleteAddressTool: CoreTool = {
  definition,
  handler,
}
