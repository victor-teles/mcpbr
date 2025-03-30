import { CoreTool } from '@mcpay/core'
import { createCustomerTool } from './create-customer'
import { getCustomerTool } from './get-customer'
import { updateCustomerTool } from './update-customer'

export const tools: CoreTool[] = [createCustomerTool, getCustomerTool, updateCustomerTool]
