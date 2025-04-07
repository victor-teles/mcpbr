import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const CreateCardTokenSchema = z.object({
  appId: z.string().describe('App public key'),
  type: z.enum(['card']).describe('Token type'),
  card: z.object({
    number: z.string().describe('Card number'),
    holderName: z.string().optional().describe('Card holder name'),
    holderDocument: z.string().optional().describe('Card holder document'),
    expMonth: z.number().describe('Card expiration month'),
    expYear: z.number().describe('Card expiration year'),
    cvv: z.string().describe('Card security code'),
    brand: z.string().describe('Card brand'),
    label: z.string().describe('Card label'),
  }),
})
export type CreateCardToken = z.infer<typeof CreateCardTokenSchema>

const definition: Tool = {
  name: 'create-card-token',
  inputSchema: toJsonSchema(CreateCardTokenSchema),
  description: 'Create a card token',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateCardTokenSchema.parse(args)
  const url = `${baseUrl}/core/v5/tokens`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Basic ${Buffer.from(`${params.apiKey}:`).toString('base64')}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const token = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(token, null, 2) }],
  }
}

export const renewCardTool: CoreTool = {
  definition,
  handler,
}
