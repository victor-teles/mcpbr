import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCptecCapitalWeatherSchema = z.object({})
export type GetCptecCapitalWeather = z.infer<typeof GetCptecCapitalWeatherSchema>

const definition: Tool = {
  name: 'get-cptec-capital-weather',
  inputSchema: toJsonSchema(GetCptecCapitalWeatherSchema),
  description: 'Get current weather conditions for all state capitals',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCptecCapitalWeatherSchema.parse(args)
  const url = `${baseUrl}/cptec/v1/clima/capital`
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

export const getCptecCapitalWeatherTool: CoreTool = {
  definition,
  handler,
}
