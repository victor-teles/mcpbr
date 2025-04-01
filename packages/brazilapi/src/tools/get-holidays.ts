import { CoreTool, Tool, toJsonSchema } from '@mcpay/core'
import { z } from 'zod'
import { baseUrl } from '../meta'

export const GetHolidaysSchema = z.object({
  year: z.number().describe('Year to get holidays for'),
})
export type GetHolidays = z.infer<typeof GetHolidaysSchema>

const definition: Tool = {
  name: 'get-holidays',
  inputSchema: toJsonSchema(GetHolidaysSchema),
  description: 'Get Brazilian holidays for a specific year',
}

export const handler = async (params: Record<string, unknown>, args: Record<string, unknown>) => {
  const body = GetHolidaysSchema.parse(args)
  const url = `${baseUrl}/feriados/v1/${body.year}`
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

export const getHolidaysTool: CoreTool = {
  definition,
  handler,
}
