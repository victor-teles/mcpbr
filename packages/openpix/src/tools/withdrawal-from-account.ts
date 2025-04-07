import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const WithdrawalFromAccountSchema = z.object({
  accountId: z.string().describe('The ID of the account'),
  value: z.number().int().describe('The amount to withdraw in cents'),
})
export type WithdrawalFromAccount = z.infer<typeof WithdrawalFromAccountSchema>

const definition: Tool = {
  name: 'withdrawal-from-account',
  inputSchema: toJsonSchema(WithdrawalFromAccountSchema),
  description: 'Withdrawal from account',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = WithdrawalFromAccountSchema.parse(args)
  const url = `${baseUrl}/api/v1/account/${body.accountId}/withdraw`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const payments = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(payments, null, 2) }],
  }
}

export const withdrawalFromAccountTool = {
  definition,
  handler,
}
