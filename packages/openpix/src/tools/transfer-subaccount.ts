import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const TransferSubaccountSchema = z.object({
  value: z.number().describe('The value of the transfer in cents'),
  fromPixKey: z.string().describe('The transfer origin pix key'),
  fromPixKeyType: z.enum(['CPF', 'CNPJ', 'EMAIL', 'PHONE', 'RANDOM']).describe('The transfer origin pix key type'),
  toPixKey: z.string().describe('The transfer destination pix key'),
  toPixKeyType: z.enum(['CPF', 'CNPJ', 'EMAIL', 'PHONE', 'RANDOM']).describe('The transfer destination pix key type'),
  correlationID: z.string().optional().describe('Your correlation ID to keep track of this transfer'),
})

export type TransferSubaccount = z.infer<typeof TransferSubaccountSchema>

const definition: Tool = {
  name: 'transfer-subaccount',
  inputSchema: toJsonSchema(TransferSubaccountSchema),
  description: 'Transfer a subaccount',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = TransferSubaccountSchema.parse(args)
  const url = `${baseUrl}/api/v1/subaccount/transfer`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }
  const response = await fetch(url, options)
  const transfer = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(transfer, null, 2) }],
  }
}

export const transferSubaccountTool = {
  definition,
  handler,
}
