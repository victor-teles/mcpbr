import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetPaymentSchema = z.object({
  paymentID: z.string().describe('The payment ID that you want to get.'),
})
export type GetPayment = z.infer<typeof GetPaymentSchema>

const definition: Tool = {
  name: 'get-payment',
  inputSchema: toJsonSchema(GetPaymentSchema),
  description: 'Get a payment by ID',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetPaymentSchema.parse(args)
  const url = `${baseUrl}/api/v1/payment/${body.paymentID}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const payment = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(payment, null, 2) }],
  }
}

export const getPaymentTool = {
  definition,
  handler,
}
