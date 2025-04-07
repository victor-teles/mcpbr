import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListSecuritiesBrokersSchema = z.object({})
export type ListSecuritiesBrokers = z.infer<typeof ListSecuritiesBrokersSchema>

const definition: Tool = {
  name: 'list-securities-brokers',
  inputSchema: toJsonSchema(ListSecuritiesBrokersSchema),
  description: 'List all securities brokers registered with CVM (Comissão de Valores Mobiliários)',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/cvm/corretoras/v1`
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

export const listSecuritiesBrokersTool: CoreTool = {
  definition,
  handler,
}
