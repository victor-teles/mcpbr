import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetTransactionSchema = z.object({
  transactionId: z.string().describe('Transaction id from openpix or the endToEndId of transaction from bank'),
})
export type GetTransaction = z.infer<typeof GetTransactionSchema>

const definition: Tool = {
  name: 'get-transaction',
  inputSchema: toJsonSchema(GetTransactionSchema),
  description: 'Get a transaction using an ID',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetTransactionSchema.parse(args)
  const url = `${baseUrl}/api/v1/transaction/${body.transactionId}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const transaction = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(transaction, null, 2) }],
  }
}

export const getTransactionTool = {
  definition,
  handler,
}
