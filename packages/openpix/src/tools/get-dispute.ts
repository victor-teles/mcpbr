import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetDisputeSchema = z.object({
  disputeId: z.string().describe('The id must be the endToEndId of the transaction that originated the Dispute'),
})
export type GetDispute = z.infer<typeof GetDisputeSchema>

const definition: Tool = {
  name: 'get-dispute',
  inputSchema: toJsonSchema(GetDisputeSchema),
  description: 'Get a dispute by ID',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetDisputeSchema.parse(args)
  const url = `${baseUrl}/api/v1/dispute/${body.disputeId}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const dispute = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(dispute, null, 2) }],
  }
}

export const getDisputeTool = {
  definition,
  handler,
}
