import { NextResponse } from "next/server";
import { buildNotionAuthUrl } from "@/auth/notion"; 
import crypto from "crypto";

export async function GET() {
  const state = crypto.randomBytes(16).toString("hex");
  // tu peux stocker le state en cookie si tu veux le vérifier au callback
  const authUrl = buildNotionAuthUrl(state);
  return NextResponse.redirect(authUrl);
}
