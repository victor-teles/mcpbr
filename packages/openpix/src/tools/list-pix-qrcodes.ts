import { Tool, toJsonSchema } from '@mcpbr/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListPixQrcodesSchema = z.object({
  skip: z.number().optional().describe('Number of records to skip'),
  limit: z.number().optional().describe('Number of records to return'),
})
export type ListPixQrcodes = z.infer<typeof ListPixQrcodesSchema>

const definition: Tool = {
  name: 'list-pix-qrcodes',
  inputSchema: toJsonSchema(ListPixQrcodesSchema),
  description: 'List Pix QR Codes',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = ListPixQrcodesSchema.parse(args)
  const queryParams = new URLSearchParams()
  if (body.skip) queryParams.set('skip', body.skip.toString())
  if (body.limit) queryParams.set('limit', body.limit.toString())

  const url = `${baseUrl}/api/v1/qrcode-static?${queryParams.toString()}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${params.apiKey}`,
    },
  }

  const response = await fetch(url, options)
  const qrCodes = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(qrCodes, null, 2) }],
  }
}

export const listPixQrCodesTool = {
  definition,
  handler,
}
