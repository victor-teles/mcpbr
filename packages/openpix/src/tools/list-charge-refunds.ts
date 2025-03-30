import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListChargeRefundsSchema = z.object({
  chargeId: z.string().describe('The ID of the charge to list refunds for'),
})
export type ListChargeRefunds = z.infer<typeof ListChargeRefundsSchema>

const definition: Tool = {
  name: 'list-charge-refunds',
  inputSchema: toJsonSchema(ListChargeRefundsSchema),
  description: 'List charge refunds',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListChargeRefundsSchema.parse(args)
  const url = `${baseUrl}/api/v1/charge/${body.chargeId}/refund`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const refunds = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(refunds, null, 2) }],
  }
}

export const listChargeRefundsTool = {
  definition,
  handler,
}
