import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListBanksSchema = z.object({})
export type ListBanks = z.infer<typeof ListBanksSchema>

const definition: Tool = {
  name: 'list-banks',
  inputSchema: toJsonSchema(ListBanksSchema),
  description: 'Get list of all Brazilian banks',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/banks/v1`
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

export const listBanksTool: CoreTool = {
  definition,
  handler,
}
