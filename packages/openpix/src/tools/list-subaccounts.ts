import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const ListSubaccountsSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
})
export type ListSubaccounts = z.infer<typeof ListSubaccountsSchema>

const definition: Tool = {
  name: 'list-subaccounts',
  inputSchema: toJsonSchema(ListSubaccountsSchema),
  description: 'List subaccounts',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListSubaccountsSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip !== undefined) queryParams.append('skip', body.skip.toString())
  if (body.limit !== undefined) queryParams.append('limit', body.limit.toString())

  const url = `${baseUrl}/api/v1/subaccount?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const subaccounts = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(subaccounts, null, 2) }],
  }
}
export const listSubaccountsTool = {
  definition,
  handler,
}
