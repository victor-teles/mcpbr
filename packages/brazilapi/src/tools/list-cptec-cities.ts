import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListCptecCitiesSchema = z.object({})
export type ListCptecCities = z.infer<typeof ListCptecCitiesSchema>

const definition: Tool = {
  name: 'list-cptec-cities',
  inputSchema: toJsonSchema(ListCptecCitiesSchema),
  description: 'List all cities available in the CPTEC weather forecast system',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/cptec/v1/cidade`
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

export const listCptecCitiesTool: CoreTool = {
  definition,
  handler,
}
