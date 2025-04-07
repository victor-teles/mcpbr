import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const DeleteWebhookSchema = z.object({
  webhookId: z.string().describe('ID of the webhook to delete'),
})
export type DeleteWebhook = z.infer<typeof DeleteWebhookSchema>

const definition: Tool = {
  name: 'delete-webhook',
  inputSchema: toJsonSchema(DeleteWebhookSchema),
  description: 'Delete a webhook',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = DeleteWebhookSchema.parse(args)
  const url = `${baseUrl}/api/v1/webhook/${body.webhookId}`
  const options = {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const result = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
  }
}

export const deleteWebhookTool = {
  definition,
  handler,
}
