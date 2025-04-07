import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetPreregistrationSchema = z.object({
  taxID: z.string().describe('The raw tax ID from the preregistration that you want to get.'),
})
export type GetPreregistration = z.infer<typeof GetPreregistrationSchema>

const definition: Tool = {
  name: 'get-preregistration',
  inputSchema: toJsonSchema(GetPreregistrationSchema),
  description: 'Get a preregistration by taxID',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetPreregistrationSchema.parse(args)

  const url = `${baseUrl}/api/v1/partner/company/${body.taxID}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const preregistration = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(preregistration, null, 2) }],
  }
}

export const getPreregistrationTool = {
  definition,
  handler,
}
