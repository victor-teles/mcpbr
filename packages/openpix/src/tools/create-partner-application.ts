import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const CreatePartnerApplicationSchema = z.object({
  application: z.object({
    name: z.string().describe('The name you want to give your application'),
    type: z
      .enum(['API', 'PLUGIN', 'ORACLE'])
      .describe('Type of the application that you want to register. Each of this has some kind of permissions.'),
  }),
  taxID: z.object({
    taxID: z
      .string()
      .describe('The tax identifier of your account holder. This should be a raw string with only digits.'),
    type: z.enum(['BR:CNPJ', 'BR:CPF']).describe('The type of the taxID'),
  }),
})
export type CreatePartnerApplication = z.infer<typeof CreatePartnerApplicationSchema>

const definition: Tool = {
  name: 'create-partner-application',
  inputSchema: toJsonSchema(CreatePartnerApplicationSchema),
  description: 'Create a partner application',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreatePartnerApplicationSchema.parse(args)
  const url = `${baseUrl}/api/v1/partner/application`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const partnerApplication = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(partnerApplication, null, 2) }],
  }
}

export const createPartnerApplicationTool = {
  definition,
  handler,
}
