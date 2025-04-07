import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListVehicleModelsSchema = z.object({
  type: z.enum(['carros', 'motos', 'caminhoes']).describe('Vehicle type'),
  brandId: z.string().describe('Brand ID to get models for'),
})
export type ListVehicleModels = z.infer<typeof ListVehicleModelsSchema>

const definition: Tool = {
  name: 'list-vehicle-models',
  inputSchema: toJsonSchema(ListVehicleModelsSchema),
  description: 'Get list of Brazilian vehicle models by brand',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/fipe/modelos/v1/${args.type}/${args.brandId}`
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

export const listVehicleModelsTool: CoreTool = {
  definition,
  handler,
}
