import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const pixKeySchema = z.object({
  value: z.number().describe('Value of the requested payment in cents'),
  destinationAlias: z.string().describe('The pix key of the payment.'),
  destinationAliasType: z.enum(['CPF', 'CNPJ', 'EMAIL', 'PHONE', 'RANDOM']).describe('The type of the pix key.'),
  correlationID: z.string().describe('An unique identifier for your payment'),
  comment: z.string().optional().describe('The comment that will be send alongisde your payment'),
})

const qrcodeSchema = z.object({
  qrCode: z.string().describe('The QR Code to be paid'),
  correlationID: z.string().describe('An unique identifier for your payment'),
  comment: z.string().optional().describe('The comment that will be send alongisde your payment'),
})

const CreatePaymentSchema = z.union([pixKeySchema, qrcodeSchema])

export type CreatePayment = z.infer<typeof CreatePaymentSchema>

const definition: Tool = {
  name: 'create-payment',
  inputSchema: toJsonSchema(CreatePaymentSchema),
  description: 'Create a payment',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreatePaymentSchema.parse(args)
  const url = `${baseUrl}/api/v1/payment`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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

export const createPaymentTool = {
  definition,
  handler,
}
