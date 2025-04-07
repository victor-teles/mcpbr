import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const CreateSubaccountSchema = z.object({
  pixKey: z.string().optional().describe('The pix key for the subaccount'),
  name: z.string().optional().describe('The name of the subaccount'),
})

export type CreateSubaccount = z.infer<typeof CreateSubaccountSchema>

const definition: Tool = {
  name: 'create-subaccount',
  inputSchema: toJsonSchema(CreateSubaccountSchema),
  description: 'Create a subaccount',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateSubaccountSchema.parse(args)
  const url = `${baseUrl}/api/v1/subaccount`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const subaccount = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(subaccount, null, 2) }],
  }
}

export const createSubaccountTool = {
  definition,
  handler,
}
