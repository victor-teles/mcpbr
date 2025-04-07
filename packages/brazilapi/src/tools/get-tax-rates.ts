import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetTaxRatesSchema = z.object({
  year: z.number().describe('Year to get tax rates for'),
})
export type GetTaxRates = z.infer<typeof GetTaxRatesSchema>

const definition: Tool = {
  name: 'get-tax-rates',
  inputSchema: toJsonSchema(GetTaxRatesSchema),
  description: 'Get Brazilian tax rates for a specific year',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetTaxRatesSchema.parse(args)
  const url = `${baseUrl}/taxas/v1/${body.year}`
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

export const getTaxRatesTool: CoreTool = {
  definition,
  handler,
}
