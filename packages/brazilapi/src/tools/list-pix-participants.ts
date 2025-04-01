import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const ListPixParticipantsSchema = z.object({})
export type ListPixParticipants = z.infer<typeof ListPixParticipantsSchema>

const definition: Tool = {
  name: 'list-pix-participants',
  inputSchema: toJsonSchema(ListPixParticipantsSchema),
  description: 'Get list of all PIX participants for the current or previous day',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const url = `${baseUrl}/pix/v1/participants`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }

  const response = await fetch(url, options)
  const result = await response.json()

  return {
    content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
  }
}

export const listPixParticipantsTool: CoreTool = {
  definition,
  handler,
}
