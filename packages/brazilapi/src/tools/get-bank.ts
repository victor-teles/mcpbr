import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetBankSchema = z.object({
  code: z.string().describe('Bank code to look up'),
})
export type GetBank = z.infer<typeof GetBankSchema>

const definition: Tool = {
  name: 'get-bank',
  inputSchema: toJsonSchema(GetBankSchema),
  description: 'Get information about a Brazilian bank by its code',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetBankSchema.parse(args)
  const url = `${baseUrl}/banks/v1/${body.code}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }

  const response = await fetch(url, options)
  const result = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
  }
}

export const getBankTool: CoreTool = {
  definition,
  handler,
}
