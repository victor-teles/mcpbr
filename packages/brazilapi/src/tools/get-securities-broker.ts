import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetSecuritiesBrokerSchema = z.object({
  cnpj: z.string().describe('The CNPJ number of the securities broker'),
})
export type GetSecuritiesBroker = z.infer<typeof GetSecuritiesBrokerSchema>

const definition: Tool = {
  name: 'get-securities-broker',
  inputSchema: toJsonSchema(GetSecuritiesBrokerSchema),
  description: 'Get information about a specific securities broker registered with CVM by its CNPJ number',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetSecuritiesBrokerSchema.parse(args)
  const url = `${baseUrl}/cvm/corretoras/v1/${body.cnpj}`
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

export const getSecuritiesBrokerTool: CoreTool = {
  definition,
  handler,
}
