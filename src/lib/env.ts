import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  DATABASE_URL: z.string().min(1),

  NOTION_CLIENT_ID: z.string().min(1),
  NOTION_CLIENT_SECRET: z.string().min(1),
  NOTION_REDIRECT_URI: z.string().url(),

  STRIPE_SECRET_KEY: z.string().min(1).optional(),
  STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
  NEXT_PUBLIC_STRIPE_PRICE_PRO: z.string().min(1).optional(),

  SESSION_SECRET: z.string().min(32), // important pour signer le cookie
});

export const env = schema.parse(process.env);
