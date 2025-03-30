import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetChargeSchema = z.object({
  id: z.string().describe('ID of the charge to retrieve'),
})
export type GetCharge = z.infer<typeof GetChargeSchema>

const definition: Tool = {
  name: 'get-charge',
  inputSchema: toJsonSchema(GetChargeSchema),
  description: 'Get a charge by ID',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetChargeSchema.parse(args)
  const url = `${baseUrl}/api/v1/charge/${body.id}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const charge = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(charge, null, 2) }],
  }
}

const getChargeTool: CoreTool = {
  definition,
  handler,
}

export { getChargeTool }
