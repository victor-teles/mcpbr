import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const ListPaymentsSchema = z.object({
  skip: z.number().describe('The number of payments to skip.'),
  limit: z.number().describe('The number of payments to return.'),
})
export type ListPayments = z.infer<typeof ListPaymentsSchema>

const definition: Tool = {
  name: 'list-payments',
  inputSchema: toJsonSchema(ListPaymentsSchema),
  description: 'List payments',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListPaymentsSchema.parse(args)

  const queryParams = new URLSearchParams()
  if (body.skip) queryParams.set('skip', body.skip.toString())
  if (body.limit) queryParams.set('limit', body.limit.toString())

  const url = `${baseUrl}/api/v1/payment?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const payments = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(payments, null, 2) }],
  }
}

export const listPaymentsTool = {
  definition,
  handler,
}
