import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const CreatePixQrCodeSchema = z.object({
  name: z.string().describe('The name of the pix qrcode'),
  correlationID: z.string().optional().describe('The correlation ID of the payment'),
  value: z.number().optional().describe('The amount of the payment'),
  comment: z.string().optional().describe('The comment of the payment'),
})

export type CreatePixQrCode = z.infer<typeof CreatePixQrCodeSchema>

const definition: Tool = {
  name: 'create-pix-qrcode',
  inputSchema: toJsonSchema(CreatePixQrCodeSchema),
  description: 'Create a Pix QR Code',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = CreatePixQrCodeSchema.parse(args)
  const url = `${baseUrl}/api/v1/qrcode-static`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(url, options)
  const qrCode = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(qrCode, null, 2) }],
  }
}

export const createPixQrCodeTool = {
  definition,
  handler,
}
