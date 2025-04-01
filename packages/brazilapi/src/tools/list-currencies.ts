import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListCurrenciesSchema = z.object({})
export type ListCurrencies = z.infer<typeof ListCurrenciesSchema>

const definition: Tool = {
  name: 'list-currencies',
  inputSchema: toJsonSchema(ListCurrenciesSchema),
  description: 'List all available currencies for exchange rate queries',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListCurrenciesSchema.parse(args)
  const url = `${baseUrl}/cambio/v1/moedas`
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

export const listCurrenciesTool: CoreTool = {
  definition,
  handler,
}
