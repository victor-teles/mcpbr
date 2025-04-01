import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCepSchema = z.object({
  cep: z.string().describe('CEP (postal code) to look up'),
})
export type GetCep = z.infer<typeof GetCepSchema>

const definition: Tool = {
  name: 'get-cep',
  inputSchema: toJsonSchema(GetCepSchema),
  description: 'Get information about a Brazilian CEP (postal code)',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCepSchema.parse(args)
  const url = `${baseUrl}/cep/v2/${body.cep}`
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

export const getCepTool: CoreTool = {
  definition,
  handler,
}
