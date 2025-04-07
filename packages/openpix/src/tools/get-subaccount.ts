import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const GetSubaccountSchema = z.object({
  id: z.string().describe('The ID of the subaccount'),
})
export type GetSubaccount = z.infer<typeof GetSubaccountSchema>

const definition: Tool = {
  name: 'get-subaccount',
  inputSchema: toJsonSchema(GetSubaccountSchema),
  description: 'Get subaccount details',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetSubaccountSchema.parse(args)
  const url = `${baseUrl}/api/v1/subaccount/${body.id}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const subaccount = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(subaccount, null, 2) }],
  }
}

export const getSubaccountTool = {
  definition,
  handler,
}
