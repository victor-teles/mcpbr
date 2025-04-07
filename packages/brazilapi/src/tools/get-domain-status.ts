import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetDomainStatusSchema = z.object({
  domain: z.string().describe('The domain or name to be evaluated (e.g. example.com.br)'),
})
export type GetDomainStatus = z.infer<typeof GetDomainStatusSchema>

const definition: Tool = {
  name: 'get-domain-status',
  inputSchema: toJsonSchema(GetDomainStatusSchema),
  description: 'Evaluate the status of a .br domain using Registro.br',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetDomainStatusSchema.parse(args)
  const url = `${baseUrl}/registrobr/v1/${body.domain}`
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

export const getDomainStatusTool: CoreTool = {
  definition,
  handler,
}
