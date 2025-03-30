import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { meta } from '../meta'

const baseUrl = meta.env[(process.env.NODE_ENV || 'development') as 'production' | 'development'].url

export const ListWebhooksSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
  url: z.string().optional().describe('The url of the webhook'),
})
export type ListWebhooks = z.infer<typeof ListWebhooksSchema>

const definition: Tool = {
  name: 'list-webhooks',
  inputSchema: toJsonSchema(ListWebhooksSchema),
  description: 'Get a list of webhooks',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListWebhooksSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip !== undefined) queryParams.append('skip', body.skip.toString())
  if (body.limit !== undefined) queryParams.append('limit', body.limit.toString())
  if (body.url !== undefined) queryParams.append('url', body.url)

  const url = `${baseUrl}/webhook?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const webhooks = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(webhooks, null, 2) }],
  }
}

const listWebhooksTool: CoreTool = {
  definition,
  handler,
}

export { listWebhooksTool }
