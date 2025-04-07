import { CoreTool } from '@mcpbr/core'
import { createCustomerTool } from './create-customer'
import { createPaymentTool } from './create-payment'
import { listCouponsTool } from './list-coupons'
import { listCustomersTool } from './list-customers'
import { listPaymentsTool } from './list-payments'

export const tools: CoreTool[] = [
  listCustomersTool,
  createCustomerTool,
  listPaymentsTool,
  createPaymentTool,
  listCouponsTool,
]
