import { Tool, toJsonSchema } from '@mcpay/core'
import { baseUrl } from '../meta'

import { z } from 'zod'

export const ListPreregistrationsSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
})
export type ListPreregistrations = z.infer<typeof ListPreregistrationsSchema>

const definition: Tool = {
  name: 'list-preregistrations',
  inputSchema: toJsonSchema(ListPreregistrationsSchema),
  description: 'List preregistrations',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListPreregistrationsSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip !== undefined) queryParams.append('skip', body.skip.toString())
  if (body.limit !== undefined) queryParams.append('limit', body.limit.toString())

  const url = `${baseUrl}/api/v1/partner/company?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const preregistrations = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(preregistrations, null, 2) }],
  }
}

export const listPreregistrationsTool = {
  definition,
  handler,
}
