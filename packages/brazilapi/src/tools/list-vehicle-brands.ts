import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListVehicleBrandsSchema = z.object({
  type: z.enum(['carros', 'motos', 'caminhoes']).describe('Vehicle type to get brands for'),
})
export type ListVehicleBrands = z.infer<typeof ListVehicleBrandsSchema>

const definition: Tool = {
  name: 'list-vehicle-brands',
  inputSchema: toJsonSchema(ListVehicleBrandsSchema),
  description: 'Get list of Brazilian vehicle brands by type',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/fipe/marcas/v1/${args.type}`
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

export const listVehicleBrandsTool: CoreTool = {
  definition,
  handler,
}
