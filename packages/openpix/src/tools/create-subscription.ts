import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const CreateSubscriptionSchema = z.object({
  customer: z.object({
    name: z.string().describe('The name of the subscription'),
    email: z.string().describe('The email of the subscription'),
    phone: z.string().describe('The phone of the subscription'),
    taxID: z.string().describe('The taxID of the subscription'),
    address: z
      .object({
        street: z.string().describe('The street of the customer'),
        number: z.string().describe('The number of the customer'),
        neighborhood: z.string().describe('The neighborhood of the customer'),
        city: z.string().describe('The city of the customer'),
        state: z.string().describe('The state of the customer'),
        complement: z.string().describe('The complement of the customer'),
        country: z.string().describe('The country of the customer'),
        zipcode: z.string().describe('The zipcode of the customer'),
      })
      .optional()
      .describe('The address of the customer'),
  }),
  value: z.number().describe('The value of the subscription'),
  comment: z.string().optional().describe('The comment of the subscription'),
  additionalInfo: z
    .array(
      z.object({
        key: z.string().describe('The key of the additional info'),
        value: z.string().describe('The value of the additional info'),
      }),
    )
    .optional()
    .describe('The additional info of the subscription'),
  dayGenerateCharge: z.number().optional().describe('The day of the month that the charges will be generated'),
  frequency: z
    .enum(['WEEKLY', 'MONTHLY', 'BIMONTHLY', 'TRIMONTHLY', 'SEMIANNUALY', 'ANNUALY'])
    .optional()
    .describe('The frequency of the subscription'),
  chargeType: z
    .enum(['DYNAMIC', 'OVERDUE'])
    .optional()
    .default('DYNAMIC')
    .describe('The charge type of the subscription'),
  dayDue: z
    .number()
    .optional()
    .default(7)
    .describe('The days that the charge will take to expire from the generation day'),
  correlationID: z.string().describe('The correlation ID of the subscription'),
})

export type CreateSubscription = z.infer<typeof CreateSubscriptionSchema>

const definition: Tool = {
  name: 'create-subscription',
  inputSchema: toJsonSchema(CreateSubscriptionSchema),
  description: 'Create a subscription',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateSubscriptionSchema.parse(args)
  const url = `${baseUrl}/api/v1/subscriptions`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const subscription = await response.json()

  return subscription
}

export const createSubscriptionTool = {
  definition,
  handler,
}
