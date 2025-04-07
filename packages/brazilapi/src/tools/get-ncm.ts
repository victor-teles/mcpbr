import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetNcmSchema = z.object({
  code: z.string().describe('The NCM code to look up'),
})
export type GetNcm = z.infer<typeof GetNcmSchema>

const definition: Tool = {
  name: 'get-ncm',
  inputSchema: toJsonSchema(GetNcmSchema),
  description: 'Get information about a specific NCM (Nomenclatura Comum do Mercosul) code',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetNcmSchema.parse(args)
  const url = `${baseUrl}/ncm/v1/${body.code}`
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

export const getNcmTool: CoreTool = {
  definition,
  handler,
}
