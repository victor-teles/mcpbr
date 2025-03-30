import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const ListWebhookIpsSchema = z.object({})
export type ListWebhookIps = z.infer<typeof ListWebhookIpsSchema>

const definition: Tool = {
  name: 'list-webhook-ips',
  inputSchema: toJsonSchema(ListWebhookIpsSchema),
  description: 'Get a list of webhook IPs',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/api/v1/webhook/ips`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const ips = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(ips, null, 2) }],
  }
}

export const listWebhookIpsTool: CoreTool = {
  definition,
  handler,
}
