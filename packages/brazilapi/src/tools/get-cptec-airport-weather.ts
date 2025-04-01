import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCptecAirportWeatherSchema = z.object({
  icaoCode: z.string().describe('The ICAO code of the airport (e.g., SBGR for Guarulhos)'),
})
export type GetCptecAirportWeather = z.infer<typeof GetCptecAirportWeatherSchema>

const definition: Tool = {
  name: 'get-cptec-airport-weather',
  inputSchema: toJsonSchema(GetCptecAirportWeatherSchema),
  description: 'Get current weather conditions for a specific airport',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCptecAirportWeatherSchema.parse(args)
  const url = `${baseUrl}/cptec/v1/clima/aeroporto/${body.icaoCode}`
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

export const getCptecAirportWeatherTool: CoreTool = {
  definition,
  handler,
}
