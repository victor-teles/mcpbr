import { Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

const GetPixQrCodeSchema = z.object({
  qrCodeId: z.string().describe('The ID of the QR Code'),
})
export type GetPixQrCode = z.infer<typeof GetPixQrCodeSchema>

const definition: Tool = {
  name: 'get-pix-qrcode',
  inputSchema: toJsonSchema(GetPixQrCodeSchema),
  description: 'Get one Pix QR Code using an ID',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetPixQrCodeSchema.parse(args)
  const url = `${baseUrl}/api/v1/qrcode-static/${body.qrCodeId}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const qrCode = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(qrCode, null, 2) }],
  }
}

export const getPixQrCodeTool = {
  definition,
  handler,
}
