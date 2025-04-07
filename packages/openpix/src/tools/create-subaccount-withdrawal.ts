import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const CreateSubaccountWithdrawalSchema = z.object({
  subaccountId: z.string().describe('The ID of the subaccount'),
  value: z.number().describe('Value of the withdrawal in cents if want to make a partial withdrawal'),
})

export type CreateSubaccountWithdrawal = z.infer<typeof CreateSubaccountWithdrawalSchema>

const definition: Tool = {
  name: 'create-subaccount-withdrawal',
  inputSchema: toJsonSchema(CreateSubaccountWithdrawalSchema),
  description: 'Create a subaccount withdrawal',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateSubaccountWithdrawalSchema.parse(args)
  const url = `${baseUrl}/api/v1/subaccount/${body.subaccountId}/withdraw`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const withdrawal = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(withdrawal, null, 2) }],
  }
}

export const createSubaccountWithdrawalTool = {
  definition,
  handler,
}
