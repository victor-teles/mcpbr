import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

// path Parameters
// id
// required
// string
// Examples:
// fe7834b4060c488a9b0f89811be5f5cf -
// correlation ID. You will need URI encoding if your correlation ID has characters outside the ASCII set or reserved characters (%, #, /).

// Request Body schema: application/json
// required
// Expires date to update charge

// expiresDate
// string
// Expiration date of the charge. Only in ISO 8601 format.

export const UpdateChargeExpirationSchema = z.object({
  chargeId: z.string().describe('The ID of the charge to update'),
  expiresDate: z.string().describe('Expiration date of the charge. Only in ISO 8601 format.'),
})
export type UpdateChargeExpiration = z.infer<typeof UpdateChargeExpirationSchema>

const definition: Tool = {
  name: 'update-charge-expiration',
  inputSchema: toJsonSchema(UpdateChargeExpirationSchema),
  description: 'Update the expiration time of a charge',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = UpdateChargeExpirationSchema.parse(args)

  const url = `${baseUrl}/api/v1/charge/${body.chargeId}`
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

export const updateChargeExpirationTool = {
  definition,
  handler,
}
