import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetDddSchema = z.object({
  ddd: z.string().describe('The DDD (Direct Distance Dialing) code'),
})
export type GetDdd = z.infer<typeof GetDddSchema>

const definition: Tool = {
  name: 'get-ddd',
  inputSchema: toJsonSchema(GetDddSchema),
  description: 'Get information about a specific DDD (Direct Distance Dialing) code',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetDddSchema.parse(args)
  const url = `${baseUrl}/ddd/v1/${body.ddd}`
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

export const getDddTool: CoreTool = {
  definition,
  handler,
}
