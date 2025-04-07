import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const DeleteChargeSchema = z.object({
  chargeId: z.string().describe('The ID of the charge to delete'),
})
export type DeleteCharge = z.infer<typeof DeleteChargeSchema>

const definition: Tool = {
  name: 'delete-charge',
  inputSchema: toJsonSchema(DeleteChargeSchema),
  description: 'Delete a charge',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = DeleteChargeSchema.parse(args)
  const url = `${baseUrl}/api/v1/charge/${body.chargeId}`
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

export const deleteChargeTool = {
  definition,
  handler,
}
