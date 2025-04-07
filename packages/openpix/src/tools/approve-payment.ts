import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ApprovePaymentSchema = z.object({
  correlationID: z.string().optional().describe('Your correlation ID to track this payment approval'),
})
export type ApprovePayment = z.infer<typeof ApprovePaymentSchema>

const definition: Tool = {
  name: 'approve-payment',
  inputSchema: toJsonSchema(ApprovePaymentSchema),
  description: 'Approve a payment request for a charge',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ApprovePaymentSchema.parse(args)
  const url = `${baseUrl}/api/v1/payment/approve`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const payment = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(payment, null, 2) }],
  }
}

export const approvePaymentTool = {
  definition,
  handler,
}
