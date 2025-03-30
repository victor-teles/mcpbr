import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { meta } from '../meta'

const baseUrl = meta.env[(process.env.NODE_ENV || 'development') as 'production' | 'development'].url

export const CreateWebhookSchema = z.object({
  name: z.string().describe('Name of webhook to be created'),
  url: z.string().url().describe('URL where the webhook will be sent'),
  authorization: z.string().describe('Authorization string for the webhook'),
  event: z
    .enum([
      'OPENPIX:CHARGE_CREATED',
      'OPENPIX:CHARGE_COMPLETED',
      'OPENPIX:CHARGE_EXPIRED',
      'OPENPIX:TRANSACTION_RECEIVED',
      'OPENPIX:TRANSACTION_REFUND_RECEIVED',
      'OPENPIX:MOVEMENT_CONFIRMED',
      'OPENPIX:MOVEMENT_FAILED',
      'OPENPIX:MOVEMENT_REMOVED',
    ])
    .describe('Event to be notified'),
  isActive: z.boolean().optional().describe('Whether the webhook is active'),
})
export type CreateWebhook = z.infer<typeof CreateWebhookSchema>

const definition: Tool = {
  name: 'create-webhook',
  inputSchema: toJsonSchema(CreateWebhookSchema),
  description: 'Create a new Webhook',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateWebhookSchema.parse(args)
  const url = `${baseUrl}/webhook`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const webhook = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(webhook, null, 2) }],
  }
}

const createWebhookTool: CoreTool = {
  definition,
  handler,
}

export { createWebhookTool }
