import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListDisputesSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
  start: z.string().optional().describe('Start date used in the query. Complies with RFC 3339.'),
  end: z.string().optional().describe('End date used in the query. Complies with RFC 3339.'),
})
export type ListDisputes = z.infer<typeof ListDisputesSchema>

const definition: Tool = {
  name: 'list-disputes',
  inputSchema: toJsonSchema(ListDisputesSchema),
  description: 'List disputes',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListDisputesSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip !== undefined) queryParams.append('skip', body.skip.toString())
  if (body.limit !== undefined) queryParams.append('limit', body.limit.toString())
  if (body.start !== undefined) queryParams.append('start', body.start)
  if (body.end !== undefined) queryParams.append('end', body.end)

  const url = `${baseUrl}/api/v1/dispute?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const disputes = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(disputes, null, 2) }],
  }
}

export const listDisputesTool = {
  definition,
  handler,
}
