import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCptecWavesSchema = z.object({
  cityCode: z.string().describe('The CPTEC city code'),
  days: z.number().optional().describe('Number of days for the forecast (default: 4)'),
})
export type GetCptecWaves = z.infer<typeof GetCptecWavesSchema>

const definition: Tool = {
  name: 'get-cptec-waves',
  inputSchema: toJsonSchema(GetCptecWavesSchema),
  description: 'Get wave forecast for a specific coastal city',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCptecWavesSchema.parse(args)
  const url = body.days
    ? `${baseUrl}/cptec/v1/ondas/${body.cityCode}/${body.days}`
    : `${baseUrl}/cptec/v1/ondas/${body.cityCode}`
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

export const getCptecWavesTool: CoreTool = {
  definition,
  handler,
}
