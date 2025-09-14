import { parseSessionCookie } from "@/auth/session";

export default async function DashboardPage() {
  const session = await parseSessionCookie(); // ⬅️ await
  if (!session) return <div>Accès refusé — connecte-toi d’abord.</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-sm opacity-80">Bienvenue !</p>
    </div>
  );
}
