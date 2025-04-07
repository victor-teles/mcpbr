import { Tool, toJsonSchema } from '@mcpbr/core'

import { z } from 'zod'
import { baseUrl } from '../meta'

// The request body to create a pre registration.

// preRegistration
// object (PreRegistrationObject)
// name
// required
// string
// The name of this preregistration. It'll be related as your company name too.

// website
// string
// A website that is related to this preregistration.

// taxID
// required
// object (TaxIDObjectPayload)
// user
// object (PreRegistrationUserObject)
// firstName
// required
// string
// The user's first name. If the pre registration has been approved, this will be turn the company's first user first name.

// lastName
// required
// string
// The user's last name. If the pre registration has been approved, this will be turn the company's first user last name.

// email
// required
// string
// The user's email. It'll be the email that will entered in contact to validate that it's a real person (it's a step to approve the preregistration). After approving the preregistration, it'll be the company's user email.

// phone
// required
// string
// The user's phone number, need to be a validated phone number because it'll receive a SMS confirming that is a real person. We're accept only values that matches the E.164 standard, that follows this pattern: [+][country code][local phone number].

// taxID
// required
// object (TaxIDObjectPayload)
// taxID
// string
// The tax identifier of your account holder. This should be a raw string with only digits.

// type
// string
// Enum: "BR:CNPJ" "BR:CPF"

const TaxIDSchema = z.object({
  taxID: z.string().describe('The tax ID of the preregistration'),
  type: z.enum(['BR:CNPJ', 'BR:CPF']).describe('The type of the tax ID'),
})

export const CreatePreregistrationSchema = z.object({
  preRegistration: z.object({
    name: z.string().describe("The name of this preregistration. It'll be related as your company name too."),
    website: z.string().optional().describe('A website that is related to this preregistration.'),
    taxID: TaxIDSchema,
  }),
  user: z.object({
    firstName: z
      .string()
      .describe(
        "The user's first name. If the pre registration has been approved, this will be turn the company's first user first name.",
      ),
    lastName: z
      .string()
      .describe(
        "The user's last name. If the pre registration has been approved, this will be turn the company's first user last name.",
      ),
    email: z
      .string()
      .describe(
        "The user's email. It'll be the email that will entered in contact to validate that it's a real person (it's a step to approve the preregistration). After approving the preregistration, it'll be the company's user email.",
      ),
    phone: z
      .string()
      .describe(
        "The user's phone number, need to be a validated phone number because it'll receive a SMS confirming that is a real person. We're accept only values that matches the E.164 standard, that follows this pattern: [+][country code][local phone number].",
      ),
    taxID: TaxIDSchema,
  }),
})
export type CreatePreregistration = z.infer<typeof CreatePreregistrationSchema>

const definition: Tool = {
  name: 'create-preregistration',
  inputSchema: toJsonSchema(CreatePreregistrationSchema),
  description: 'Create a preregistration',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreatePreregistrationSchema.parse(args)
  const url = `${baseUrl}/api/v1/partner/company`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const preregistration = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(preregistration, null, 2) }],
  }
}

export const createPreregistrationTool = {
  definition,
  handler,
}
