import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListPaymentsSchema = z.object({})
export type ListPayments = z.infer<typeof ListPaymentsSchema>

const definition: Tool = {
  name: 'list-payments',
  inputSchema: toJsonSchema(ListPaymentsSchema),
  description: 'List all payments',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/v1/billing/list`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const payments = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(payments, null, 2) }],
  }
}

const listPaymentsTool: CoreTool = {
  definition,
  handler,
}

export { listPaymentsTool }
