import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCptecCitySchema = z.object({
  cityName: z.string().describe('The name of the city to search for'),
})
export type GetCptecCity = z.infer<typeof GetCptecCitySchema>

const definition: Tool = {
  name: 'get-cptec-city',
  inputSchema: toJsonSchema(GetCptecCitySchema),
  description: 'Search for a city in the CPTEC weather forecast system by name',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCptecCitySchema.parse(args)
  const url = `${baseUrl}/cptec/v1/cidade/${encodeURIComponent(body.cityName)}`
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

export const getCptecCityTool: CoreTool = {
  definition,
  handler,
}
