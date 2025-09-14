// src/auth/session.ts
import { cookies } from "next/headers";
import { env } from "@/lib/env";
import { createHmac } from "crypto";

const COOKIE_NAME = "starter_saas_session";

function sign(payload: string) {
  return createHmac("sha256", env.SESSION_SECRET).update(payload).digest("hex");
}

export function createSessionCookie(userId: string) {
  const value = JSON.stringify({ userId });
  const signature = sign(value);
  return `${Buffer.from(value).toString("base64")}.${signature}`;
}

export async function parseSessionCookie(): Promise<{ userId: string } | null> {
  const store = await cookies();
  const raw = store.get(COOKIE_NAME)?.value;
  if (!raw) return null;
  const [b64, signature] = raw.split(".");
  if (!b64 || !signature) return null;
  const value = Buffer.from(b64, "base64").toString("utf-8");
  if (sign(value) !== signature) return null;
  try {
    return JSON.parse(value) as { userId: string };
  } catch {
    return null;
  }
}

export async function setSessionCookie(userId: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, createSessionCookie(userId), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
