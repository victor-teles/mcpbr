import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'
const GetRefundSchema = z.object({
  refundId: z.string().describe('The ID of the refund or correlation ID'),
})
export type GetRefund = z.infer<typeof GetRefundSchema>

const definition: Tool = {
  name: 'get-refund',
  inputSchema: toJsonSchema(GetRefundSchema),
  description: 'Get one refund using an ID',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetRefundSchema.parse(args)
  const url = `${baseUrl}/api/v1/refund/${body.refundId}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const refund = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(refund, null, 2) }],
  }
}

export const getRefundTool = {
  definition,
  handler,
}
