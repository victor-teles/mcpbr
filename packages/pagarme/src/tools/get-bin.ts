import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetBinSchema = z.object({
  bin: z.string().describe('BIN'),
})
export type GetBin = z.infer<typeof GetBinSchema>

const definition: Tool = {
  name: 'get-bin',
  inputSchema: toJsonSchema(GetBinSchema),
  description: 'Get a bin',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetBinSchema.parse(args)
  const url = `${baseUrl}/bin/v1/${body.bin}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Basic ${Buffer.from(`${params.apiKey}:`).toString('base64')}`,
    },
  }

  const response = await fetch(url, options)
  const bin = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(bin, null, 2) }],
  }
}

export const getBinTool: CoreTool = {
  definition,
  handler,
}
