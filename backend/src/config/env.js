import 'dotenv/config'
import { z } from 'zod'

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(4000),
  ALLOWED_ORIGIN: z.string().url().default('http://localhost:5173'),
})

const result = schema.safeParse(process.env)

if (!result.success) {
  console.error('Invalid environment configuration', result.error.flatten().fieldErrors)
  process.exit(1)
}

export const env = result.data
