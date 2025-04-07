import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCptecForecastSchema = z.object({
  cityCode: z.string().describe('The CPTEC city code'),
  days: z.number().optional().describe('Number of days for the forecast (default: 4)'),
})
export type GetCptecForecast = z.infer<typeof GetCptecForecastSchema>

const definition: Tool = {
  name: 'get-cptec-forecast',
  inputSchema: toJsonSchema(GetCptecForecastSchema),
  description: 'Get weather forecast for a specific city',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCptecForecastSchema.parse(args)
  const url = body.days
    ? `${baseUrl}/cptec/v1/clima/previsao/${body.cityCode}/${body.days}`
    : `${baseUrl}/cptec/v1/clima/previsao/${body.cityCode}`
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

export const getCptecForecastTool: CoreTool = {
  definition,
  handler,
}
