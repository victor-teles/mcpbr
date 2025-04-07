import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const ListTransactionsSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
  start: z.string().optional().describe('Start date used in the query. Complies with RFC 3339.'),
  end: z.string().optional().describe('End date used in the query. Complies with RFC 3339.'),
  charge: z
    .string()
    .optional()
    .describe(
      'You can use the charge ID or correlation ID or transaction ID of charge to get a list of transactions related of this transaction',
    ),
  pixQrCode: z
    .string()
    .optional()
    .describe(
      'You can use the QrCode static ID or correlation ID or identifier field of QrCode static to get a list of QrCode related of this transaction',
    ),
  withdrawal: z
    .string()
    .optional()
    .describe(
      'You can use the ID or EndToEndId of a withdrawal transaction to get all transactions related to the withdrawal',
    ),
})
export type ListTransactions = z.infer<typeof ListTransactionsSchema>

const definition: Tool = {
  name: 'list-transactions',
  inputSchema: toJsonSchema(ListTransactionsSchema),
  description: 'List transactions',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListTransactionsSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip) queryParams.set('skip', body.skip.toString())
  if (body.limit) queryParams.set('limit', body.limit.toString())
  if (body.start) queryParams.set('start', body.start)
  if (body.end) queryParams.set('end', body.end)
  if (body.charge) queryParams.set('charge', body.charge)
  if (body.pixQrCode) queryParams.set('pixQrCode', body.pixQrCode)
  if (body.withdrawal) queryParams.set('withdrawal', body.withdrawal)

  const url = `${baseUrl}/api/v1/transaction?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const transactions = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(transactions, null, 2) }],
  }
}

export const listTransactionsTool = {
  definition,
  handler,
}
