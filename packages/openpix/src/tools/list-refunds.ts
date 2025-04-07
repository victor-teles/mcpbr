import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const ListRefundsSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
})
export type ListRefunds = z.infer<typeof ListRefundsSchema>

const definition: Tool = {
  name: 'list-refunds',
  inputSchema: toJsonSchema(ListRefundsSchema),
  description: 'List refunds',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListRefundsSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip) queryParams.set('skip', body.skip.toString())
  if (body.limit) queryParams.set('limit', body.limit.toString())

  const url = `${baseUrl}/api/v1/refund?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const refunds = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(refunds, null, 2) }],
  }
}

export const listRefundsTool = {
  definition,
  handler,
}
