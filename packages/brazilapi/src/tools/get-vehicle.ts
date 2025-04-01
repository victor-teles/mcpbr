import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetVehicleSchema = z.object({
  plate: z.string().describe('Vehicle plate number'),
})
export type GetVehicle = z.infer<typeof GetVehicleSchema>

const definition: Tool = {
  name: 'get-vehicle',
  inputSchema: toJsonSchema(GetVehicleSchema),
  description: 'Get information about a Brazilian vehicle by its plate number',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetVehicleSchema.parse(args)
  const url = `${baseUrl}/fipe/veiculos/v1/${body.plate}`
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

export const getVehicleTool: CoreTool = {
  definition,
  handler,
}
