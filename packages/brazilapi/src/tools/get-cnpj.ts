import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetCnpjSchema = z.object({
  cnpj: z.string().describe('CNPJ number to get information about'),
})
export type GetCnpj = z.infer<typeof GetCnpjSchema>

const definition: Tool = {
  name: 'get-cnpj',
  inputSchema: toJsonSchema(GetCnpjSchema),
  description: 'Get information about a Brazilian CNPJ (Cadastro Nacional da Pessoa Jurídica) number',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetCnpjSchema.parse(args)
  const url = `${baseUrl}/cnpj/v1/${body.cnpj}`
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

export const getCnpjTool: CoreTool = {
  definition,
  handler,
}
