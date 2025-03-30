import { z } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type EmptyObject = {}

type McpInputSchema = z.ZodObject<
  {
    type: z.ZodLiteral<'object'>
    properties: z.ZodOptional<
      z.ZodObject<
        EmptyObject,
        'passthrough',
        z.ZodTypeAny,
        z.objectOutputType<EmptyObject, z.ZodTypeAny, 'passthrough'>,
        z.objectInputType<EmptyObject, z.ZodTypeAny, 'passthrough'>
      >
    >
  },
  'passthrough',
  z.ZodTypeAny,
  z.objectOutputType<
    {
      type: z.ZodLiteral<'object'>
      properties: z.ZodOptional<
        z.ZodObject<
          EmptyObject,
          'passthrough',
          z.ZodTypeAny,
          z.objectOutputType<EmptyObject, z.ZodTypeAny, 'passthrough'>,
          z.objectInputType<EmptyObject, z.ZodTypeAny, 'passthrough'>
        >
      >
    },
    z.ZodTypeAny,
    'passthrough'
  >,
  z.objectInputType<
    {
      type: z.ZodLiteral<'object'>
      properties: z.ZodOptional<
        z.ZodObject<
          EmptyObject,
          'passthrough',
          z.ZodTypeAny,
          z.objectOutputType<EmptyObject, z.ZodTypeAny, 'passthrough'>,
          z.objectInputType<EmptyObject, z.ZodTypeAny, 'passthrough'>
        >
      >
    },
    z.ZodTypeAny,
    'passthrough'
  >
>

export function toJsonSchema<T>(schema: z.Schema): z.infer<McpInputSchema> {
  return zodToJsonSchema(schema, { target: 'jsonSchema7' }) as z.infer<McpInputSchema>
}
