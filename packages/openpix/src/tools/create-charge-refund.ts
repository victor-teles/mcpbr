import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { meta } from '../meta'

const baseUrl = meta.env[(process.env.NODE_ENV || 'development') as 'production' | 'development'].url

export const CreateChargeRefundSchema = z.object({
  chargeId: z.string().describe('The ID of the charge to refund'),
  value: z.number().describe('The amount to refund'),
  correlationID: z.string().describe('Your correlation ID to keep track for this refund'),
  comment: z.string().describe('Comment for the refund'),
})
export type CreateChargeRefund = z.infer<typeof CreateChargeRefundSchema>

const definition: Tool = {
  name: 'create-charge-refund',
  inputSchema: toJsonSchema(CreateChargeRefundSchema),
  description: 'Create a refund for a charge',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateChargeRefundSchema.parse(args)
  const url = `${baseUrl}/api/v1/charge/${body.chargeId}/refund`
  const options = {
    method: 'POST',
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

export const createChargeRefundTool = {
  definition,
  handler,
}
