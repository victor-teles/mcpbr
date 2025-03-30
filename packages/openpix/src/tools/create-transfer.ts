import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const CreateTransferSchema = z.object({
  value: z.number().describe('The value of the transfer'),
  fromPixKey: z.string().describe('The pix key of the account the value of the transfer will come out from'),
  toPixKey: z.string().describe('The pix key of the account the value of the transfer will go to'),
})

export type CreateTransfer = z.infer<typeof CreateTransferSchema>

const definition: Tool = {
  name: 'create-transfer',
  inputSchema: toJsonSchema(CreateTransferSchema),
  description: 'Create a transfer',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateTransferSchema.parse(args)
  const url = `${baseUrl}/api/v1/transfer`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const transfer = await response.json()

  return transfer
}

export const createTransferTool = {
  definition,
  handler,
}
