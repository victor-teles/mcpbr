import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetVehiclePriceByReferenceSchema = z.object({
  type: z.enum(['carros', 'motos', 'caminhoes']).describe('Vehicle type'),
  brandId: z.string().describe('Brand ID'),
  modelId: z.string().describe('Model ID'),
  yearId: z.string().describe('Year ID'),
  referenceId: z.string().describe('Reference table ID'),
})
export type GetVehiclePriceByReference = z.infer<typeof GetVehiclePriceByReferenceSchema>

const definition: Tool = {
  name: 'get-vehicle-price-by-reference',
  inputSchema: toJsonSchema(GetVehiclePriceByReferenceSchema),
  description: 'Get price information for a specific vehicle model and year using a reference table',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetVehiclePriceByReferenceSchema.parse(args)
  const url = `${baseUrl}/fipe/precos/v1/${body.type}/${body.brandId}/${body.modelId}/${body.yearId}/${body.referenceId}`
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

export const getVehiclePriceByReferenceTool: CoreTool = {
  definition,
  handler,
}
