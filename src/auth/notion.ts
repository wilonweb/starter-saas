import { env } from "@/lib/env";

const NOTION_OAUTH_AUTHORIZE = "https://api.notion.com/v1/oauth/authorize";
const NOTION_OAUTH_TOKEN = "https://api.notion.com/v1/oauth/token";

export function buildNotionAuthUrl(state: string) {
  const url = new URL(NOTION_OAUTH_AUTHORIZE);
  url.searchParams.set("owner", "user"); // ou "workspace" si besoin
  url.searchParams.set("client_id", env.NOTION_CLIENT_ID);
  url.searchParams.set("redirect_uri", env.NOTION_REDIRECT_URI);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("state", state);
  return url.toString();
}

// Échange code -> access_token
export async function exchangeCodeForToken(code: string) {
  const basic = Buffer.from(`${env.NOTION_CLIENT_ID}:${env.NOTION_CLIENT_SECRET}`).toString("base64");

  const res = await fetch(NOTION_OAUTH_TOKEN, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${basic}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: env.NOTION_REDIRECT_URI,
    }),
    // Important en App Router
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion token exchange failed: ${res.status} ${text}`);
  }
  return res.json() as Promise<{
    access_token: string;
    workspace_id?: string;
    workspace_name?: string;
    bot_id?: string;
    // Notion ne renvoie pas toujours refresh_token
    refresh_token?: string;
    token_type?: string;
  }>;
}

