import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetVehiclePriceSchema = z.object({
  type: z.enum(['carros', 'motos', 'caminhoes']).describe('Vehicle type'),
  brandId: z.string().describe('Brand ID'),
  modelId: z.string().describe('Model ID'),
  yearId: z.string().describe('Year ID to get price for'),
})
export type GetVehiclePrice = z.infer<typeof GetVehiclePriceSchema>

const definition: Tool = {
  name: 'get-vehicle-price',
  inputSchema: toJsonSchema(GetVehiclePriceSchema),
  description: 'Get price information for a specific vehicle model and year',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetVehiclePriceSchema.parse(args)
  const url = `${baseUrl}/fipe/precos/v1/${body.type}/${body.brandId}/${body.modelId}/${body.yearId}`
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

export const getVehiclePriceTool: CoreTool = {
  definition,
  handler,
}
