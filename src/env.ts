import dotenv from 'dotenv';
dotenv.config({ path: './src/.env' });

import { z } from "zod"

const envSchema = z.object({
  PORT: z.string().nonempty(),
  SECRET_KEY: z.string().nonempty()
})

export const env = envSchema.parse(process.env)
