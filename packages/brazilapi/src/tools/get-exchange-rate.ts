import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetExchangeRateSchema = z.object({
  moeda: z.string().describe('The currency code (e.g., USD, EUR)'),
  data: z.string().describe('The date in YYYY-MM-DD format'),
})
export type GetExchangeRate = z.infer<typeof GetExchangeRateSchema>

const definition: Tool = {
  name: 'get-exchange-rate',
  inputSchema: toJsonSchema(GetExchangeRateSchema),
  description: 'Get the exchange rate for a specific currency on a given date',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetExchangeRateSchema.parse(args)
  const url = `${baseUrl}/cambio/v1/cotacao/${body.moeda}/${body.data}`
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

export const getExchangeRateTool: CoreTool = {
  definition,
  handler,
}
