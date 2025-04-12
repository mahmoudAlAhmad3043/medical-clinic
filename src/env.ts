import dotenv from 'dotenv';
dotenv.config({ path: './src/.env' });

import { z } from "zod"

const envSchema = z.object({
  PORT: z.string().nonempty(),
  SECRET_KEY: z.string().nonempty(),
  MONGO_URI: z.string().nonempty(),
  EMAIL_USER: z.string().nonempty(),
  EMAIL_PASS: z.string().nonempty(),
  IP: z.string().nonempty()
})

export const env = envSchema.parse(process.env)
