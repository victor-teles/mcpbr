import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const CreateRefundSchema = z.object({
  value: z.number().optional().describe('The amount of the refund'),
  transactionEndToEndId: z
    .string()
    .optional()
    .describe('Your transaction ID, or endToEnd ID, to keep track of this refund'),
  correlationID: z.string().optional().describe('Your correlation ID, unique identifier refund'),
  comment: z.string().max(140).optional().describe('Comment of this refund. Maximum length of 140 characters.'),
})

export type CreateRefund = z.infer<typeof CreateRefundSchema>

const definition: Tool = {
  name: 'create-refund',
  inputSchema: toJsonSchema(CreateRefundSchema),
  description: 'Create a refund',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateRefundSchema.parse(args)
  const url = `${baseUrl}/api/v1/refund`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const refund = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(refund, null, 2) }],
  }
}

export const createRefundTool = {
  definition,
  handler,
}
