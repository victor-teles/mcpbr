import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

// correlationID
// required
// string
// Your correlation ID to keep track of this charge

// value
// required
// number
// Value in cents of this charge

// type
// string
// Enum: "DYNAMIC" "OVERDUE"
// Charge type is used to determine whether a charge will have a deadline, fines and interests

// comment
// string
// Comment to be added in infoPagador

// expiresIn
// number
// Expires the charge in seconds (minimum is 15 minutes)

// expiresDate
// string
// Expiration date of the charge. Only in ISO 8601 format.

// customer
// object or object or object (CustomerPayload)
// Customer field is not required. However, if you decide to send it, you must send at least one of the following combinations, name + taxID or name + email or name + phone.

// One of objectobjectobject
// name
// required
// string
// email
// string
// phone
// string
// taxID
// required
// string
// correlationID
// string
// address
// object
// daysForDueDate
// number
// Time in days until the charge hits the deadline so fines and interests start applying. This property is only considered for charges of type OVERDUE

// daysAfterDueDate
// number
// Time in days that a charge is still payable after the deadline. This property is only considered for charges of type OVERDUE

// interests
// object
// Interests configuration. This property is only considered for charges of type OVERDUE

// value
// number
// Value in basis points of interests to be applied daily after the charge hits the deadline

// fines
// object
// Fines configuration. This property is only considered for charges of type OVERDUE

// value
// number
// Value in basis points of fines to be applied when the charge hits the deadline

// discountSettings
// object
// Discount settings for the charge. This property is only considered for charges of type OVERDUE

// additionalInfo
// Array of objects
// Additional info of the charge

// enableCashbackPercentage
// boolean
// true to enable cashback and false to disable.

// enableCashbackExclusivePercentage
// boolean
// true to enable fidelity cashback and false to disable.

// subaccount
// string
// Pix key of the subaccount to receive the charge

// splits
// Array of objects
// This is the array that will configure how will be splitted the value of the charge

// Array
// value
// required
// number
// how much value of that charge will be splitted

// pixKey
// required
// string
// the pixKey of the company bank account that will receive this split

// splitType
// string
// Enum: "SPLIT_INTERNAL_TRANSFER" "SPLIT_SUB_ACCOUNT" "SPLIT_PARTNER"
// The type of the split. Each of these ones will be processed in specific way. See here how each one will be processed.

export const CreateChargeSchema = z.object({
  value: z.number().describe('Value of the charge in cents'),
  correlationID: z.string().describe('Unique identifier for the charge'),
  comment: z.string().optional().describe('Comment for the charge'),
  type: z
    .enum(['DYNAMIC', 'OVERDUE'])
    .optional()
    .describe('Charge type is used to determine whether a charge will have a deadline, fines and interests'),
  expiresIn: z.number().optional().describe('Expires the charge in seconds (minimum is 15 minutes)'),
  expiresDate: z.date().optional().describe('Expiration date of the charge. Only in ISO 8601 format.'),
  customer: z
    .object({
      name: z.string().describe('Name of the customer'),
      taxID: z.string().describe('Tax ID of the customer'),
      email: z.string().email().optional().describe('Email of the customer'),
      phone: z.string().optional().describe('Phone of the customer'),
      correlationID: z.string().optional().describe('Correlation ID of the customer'),
      address: z
        .object({
          country: z.string().describe('Country of the customer address'),
          state: z.string().describe('State of the customer address'),
          city: z.string().describe('City of the customer address'),
          neighborhood: z.string().describe('Neighborhood of the customer address'),
          street: z.string().describe('Street of the customer address'),
          zipCode: z.string().describe('Zip code of the customer address'),
          number: z.string().describe('Number of the customer address'),
          complement: z.string().describe('Complement of the customer address'),
        })
        .optional()
        .describe('Address of the customer'),
    })
    .optional()
    .describe('Customer information'),
  daysForDueDate: z
    .number()
    .optional()
    .describe(
      'Time in days until the charge hits the deadline so fines and interests start applying. This property is only considered for charges of type OVERDUE',
    ),
  daysAfterDueDate: z
    .number()
    .optional()
    .describe(
      'Time in days that a charge is still payable after the deadline. This property is only considered for charges of type OVERDUE',
    ),
  interests: z
    .object({
      value: z
        .number()
        .describe('Value in basis points of interests to be applied daily after the charge hits the deadline'),
    })
    .optional()
    .describe('Interests configuration. This property is only considered for charges of type OVERDUE'),
  fines: z
    .object({
      value: z.number().describe('Value in basis points of fines to be applied when the charge hits the deadline'),
    })
    .optional()
    .describe('Fines configuration. This property is only considered for charges of type OVERDUE'),
  discountSettings: z
    .object({
      value: z.number().describe('Value in basis points of discounts to be applied to the charge'),
    })
    .optional()
    .describe('Discount settings for the charge. This property is only considered for charges of type OVERDUE'),
  additionalInfo: z
    .array(z.object({ key: z.string(), value: z.string() }))
    .optional()
    .describe('Additional info of the charge'),
  enableCashbackPercentage: z.boolean().optional().describe('Enable cashback percentage'),
  enableCashbackExclusivePercentage: z.boolean().optional().describe('Enable cashback exclusive percentage'),
  subaccount: z.string().optional().describe('Pix key of the subaccount to receive the charge'),
  splits: z
    .array(
      z.object({
        value: z.number().describe('How much value of that charge will be splitted'),
        pixKey: z.string().describe('The pixKey of the company bank account that will receive this split'),
        splitType: z
          .enum(['SPLIT_INTERNAL_TRANSFER', 'SPLIT_SUB_ACCOUNT', 'SPLIT_PARTNER'])
          .describe('The type of the split. Each of these ones will be processed in specific way.'),
      }),
    )
    .optional()
    .describe('This is the array that will configure how will be splitted the value of the charge'),
})

export type CreateCharge = z.infer<typeof CreateChargeSchema>

const definition: Tool = {
  name: 'create-charge',
  inputSchema: toJsonSchema(CreateChargeSchema),
  description: 'Create a new charge',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreateChargeSchema.parse(args)
  const url = `${baseUrl}/api/v1/charge`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const charge = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(charge, null, 2) }],
  }
}

const createChargeTool: CoreTool = {
  definition,
  handler,
}

export { createChargeTool }
