import { CoreTool, Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'
export const ListCouponsSchema = z.object({})
export type ListCoupons = z.infer<typeof ListCouponsSchema>

const definition: Tool = {
  name: 'list-coupons',
  inputSchema: toJsonSchema(ListCouponsSchema),
  description: 'List all coupons',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/v1/coupon/list`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const coupons = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(coupons, null, 2) }],
  }
}

const listCouponsTool: CoreTool = {
  definition,
  handler,
}

export { listCouponsTool }
