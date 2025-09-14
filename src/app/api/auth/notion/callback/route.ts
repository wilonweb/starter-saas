import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForToken } from "@/auth/notion";
import { prisma } from "@/db/client";
import { setSessionCookie } from "@/auth/session";
import { env } from "@/lib/env";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error || !code) {
    const url = new URL(
      `/profile?error=${encodeURIComponent(error || "missing_code")}`,
      env.NEXT_PUBLIC_APP_URL
    );
    return NextResponse.redirect(url);
  }

  try {
    const token = await exchangeCodeForToken(code);
    const provider = "notion";
    const providerAccountId = token.workspace_id || token.bot_id || "notion_bot";

    const user = await prisma.user.upsert({
      where: { notionId: providerAccountId || undefined },
      update: {},
      create: { notionId: providerAccountId || undefined },
    });

    await prisma.providerAccount.upsert({
      where: {
        provider_providerAccountId: {
          provider,
          providerAccountId: providerAccountId!,
        },
      },
      update: {
        accessToken: token.access_token,
        refreshToken: token.refresh_token ?? null,
        tokenType: token.token_type ?? null,
      },
      create: {
        userId: user.id,
        provider,
        providerAccountId: providerAccountId!,
        accessToken: token.access_token,
        refreshToken: token.refresh_token ?? null,
        tokenType: token.token_type ?? null,
      },
    });

    await setSessionCookie(user.id);

    // URL ABSOLUE
    return NextResponse.redirect(new URL("/dashboard", env.NEXT_PUBLIC_APP_URL));
  } catch (e: any) {
    console.error(e);
    return NextResponse.redirect(
      new URL(
        `/profile?error=${encodeURIComponent(e.message || "oauth_failed")}`,
        env.NEXT_PUBLIC_APP_URL
      )
    );
  }
}
