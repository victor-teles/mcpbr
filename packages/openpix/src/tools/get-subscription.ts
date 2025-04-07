import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const GetSubscriptionSchema = z.object({
  subscriptionId: z.string().describe('The globalID or correlationID of the subscription.'),
})
export type GetSubscription = z.infer<typeof GetSubscriptionSchema>

const definition: Tool = {
  name: 'get-subscription',
  inputSchema: toJsonSchema(GetSubscriptionSchema),
  description: 'Get one subscription',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetSubscriptionSchema.parse(args)
  const url = `${baseUrl}/api/v1/subscriptions/${body.subscriptionId}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const subscription = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(subscription, null, 2) }],
  }
}

export const getSubscriptionTool: CoreTool = {
  definition,
  handler,
}
