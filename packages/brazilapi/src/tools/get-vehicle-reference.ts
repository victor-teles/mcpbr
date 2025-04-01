import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetVehicleReferenceSchema = z.object({
  type: z.enum(['carros', 'motos', 'caminhoes']).describe('Vehicle type to get reference table for'),
})
export type GetVehicleReference = z.infer<typeof GetVehicleReferenceSchema>

const definition: Tool = {
  name: 'get-vehicle-reference',
  inputSchema: toJsonSchema(GetVehicleReferenceSchema),
  description: 'Get the current reference table for vehicle prices',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetVehicleReferenceSchema.parse(args)
  const url = `${baseUrl}/fipe/tabelas/v1/${body.type}`
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

export const getVehicleReferenceTool: CoreTool = {
  definition,
  handler,
}
