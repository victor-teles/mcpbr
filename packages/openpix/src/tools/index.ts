import { CoreTool } from '@mcpay/core'
import { approvePaymentTool } from './approve-payment'
import { createChargeTool } from './create-charge'
import { createChargeRefundTool } from './create-charge-refund'
import { createCustomerTool } from './create-customer'
import { createPartnerApplicationTool } from './create-partner-application'
import { createPaymentTool } from './create-payment'
import { createPixQrCodeTool } from './create-pix-qrcode'
import { createPreregistrationTool } from './create-preregistration'
import { createRefundTool } from './create-refund'
import { createSubaccountTool } from './create-subaccount'
import { createSubaccountWithdrawalTool } from './create-subaccount-withdrawal'
import { createSubscriptionTool } from './create-subscription'
import { createTransferTool } from './create-transfer'
import { createWebhookTool } from './create-webhook'
import { deleteChargeTool } from './delete-charge'
import { deleteWebhookTool } from './delete-webhook'
import { getAccountTool } from './get-account'
import { getChargeTool } from './get-charge'
import { getCustomerTool } from './get-customer'
import { getDisputeTool } from './get-dispute'
import { getPaymentTool } from './get-payment'
import { getPixQrCodeTool } from './get-pix-qrcode'
import { getPreregistrationTool } from './get-preregistration'
import { getRefundTool } from './get-refund'
import { getSubaccountTool } from './get-subaccount'
import { getSubscriptionTool } from './get-subscription'
import { getTransactionTool } from './get-transaction'
import { listAccountsTool } from './list-accounts'
import { listChargeRefundsTool } from './list-charge-refunds'
import { listChargesTool } from './list-charges'
import { listCustomersTool } from './list-customers'
import { listDisputesTool } from './list-disputes'
import { listPaymentsTool } from './list-payments'
import { listPixQrCodesTool } from './list-pix-qrcodes'
import { listPreregistrationsTool } from './list-preregistrations'
import { listRefundsTool } from './list-refunds'
import { listSubaccountsTool } from './list-subaccounts'
import { listTransactionsTool } from './list-transactions'
import { listWebhookIpsTool } from './list-webhook-ips'
import { listWebhooksTool } from './list-webhooks'
import { transferSubaccountTool } from './transfer-subaccount'
import { updateChargeExpirationTool } from './update-charge-expiration'
import { updateCustomerTool } from './update-customer'

export const tools: CoreTool[] = [
  approvePaymentTool,
  createPartnerApplicationTool,
  createChargeRefundTool,
  createChargeTool,
  createCustomerTool,
  createPaymentTool,
  createPixQrCodeTool,
  createPreregistrationTool,
  createRefundTool,
  createSubscriptionTool,
  createSubaccountTool,
  createSubaccountWithdrawalTool,
  createTransferTool,
  createWebhookTool,
  deleteChargeTool,
  deleteWebhookTool,
  getAccountTool,
  getChargeTool,
  getCustomerTool,
  getDisputeTool,
  getPaymentTool,
  getPixQrCodeTool,
  getPreregistrationTool,
  getRefundTool,
  getSubscriptionTool,
  getSubaccountTool,
  getTransactionTool,
  listAccountsTool,
  listChargesTool,
  listCustomersTool,
  listDisputesTool,
  listPaymentsTool,
  listPixQrCodesTool,
  listPreregistrationsTool,
  listRefundsTool,
  listSubaccountsTool,
  listTransactionsTool,
  listWebhookIpsTool,
  listWebhooksTool,
  listChargeRefundsTool,
  transferSubaccountTool,
  updateChargeExpirationTool,
  updateCustomerTool,
]
