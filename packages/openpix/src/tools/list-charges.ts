import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListChargesSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
})
export type ListCharges = z.infer<typeof ListChargesSchema>

const definition: Tool = {
  name: 'list-charges',
  inputSchema: toJsonSchema(ListChargesSchema),
  description: 'Get a list of charges',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListChargesSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip !== undefined) queryParams.append('skip', body.skip.toString())
  if (body.limit !== undefined) queryParams.append('limit', body.limit.toString())

  const url = `${baseUrl}/api/v1/charge?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const charges = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(charges, null, 2) }],
  }
}

const listChargesTool: CoreTool = {
  definition,
  handler,
}

export { listChargesTool }
