import { toJsonSchema, Tool } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListAccountsSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
})
export type ListAccounts = z.infer<typeof ListAccountsSchema>

const definition: Tool = {
  name: 'list-accounts',
  inputSchema: toJsonSchema(ListAccountsSchema),
  description: 'List all accounts',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListAccountsSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip !== undefined) queryParams.append('skip', body.skip.toString())
  if (body.limit !== undefined) queryParams.append('limit', body.limit.toString())

  const url = `${baseUrl}/api/v1/account?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const accounts = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(accounts, null, 2) }],
  }
}

export const listAccountsTool = {
  definition,
  handler,
}
