import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListVehicleYearsSchema = z.object({
  type: z.enum(['carros', 'motos', 'caminhoes']).describe('Vehicle type'),
  brandId: z.string().describe('Brand ID'),
  modelId: z.string().describe('Model ID to get years for'),
})
export type ListVehicleYears = z.infer<typeof ListVehicleYearsSchema>

const definition: Tool = {
  name: 'list-vehicle-years',
  inputSchema: toJsonSchema(ListVehicleYearsSchema),
  description: 'Get list of available years for a specific vehicle model',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/fipe/anos/v1/${args.type}/${args.brandId}/${args.modelId}`
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

export const listVehicleYearsTool: CoreTool = {
  definition,
  handler,
}
