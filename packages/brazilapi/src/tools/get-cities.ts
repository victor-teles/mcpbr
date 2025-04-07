import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCitiesSchema = z.object({
  state: z.string().max(2).describe('State code to get cities for'),
  providers: z
    .array(z.enum(['dados-abertos-br', 'gov', 'wikipedia']))
    .optional()
    .describe('Providers to use'),
})
export type GetCities = z.infer<typeof GetCitiesSchema>

const definition: Tool = {
  name: 'get-cities',
  inputSchema: toJsonSchema(GetCitiesSchema),
  description: 'Get information about Brazilian cities',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCitiesSchema.parse(args)

  const url = `${baseUrl}/ibge/municipios/v1/${body.state}?providers=${body.providers?.join(',')}`
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

export const getCitiesTool: CoreTool = {
  definition,
  handler,
}
