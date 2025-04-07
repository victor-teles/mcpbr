import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetAccountSchema = z.object({
  id: z.string().describe('The ID of the account to retrieve'),
})
export type GetAccount = z.infer<typeof GetAccountSchema>

const definition: Tool = {
  name: 'get-account',
  inputSchema: toJsonSchema(GetAccountSchema),
  description: 'Get an account by ID',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetAccountSchema.parse(args)
  const url = `${baseUrl}/api/v1/account/${body.id}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const account = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(account, null, 2) }],
  }
}
export const getAccountTool = {
  definition,
  handler,
}
