import { parseSessionCookie } from "@/auth/session";
import { prisma } from "@/db/client";

export default async function ProfilePage() {
  const session = await parseSessionCookie(); // ⬅️ await
  if (!session) return <div>Non connecté</div>;

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: { accounts: true },
  });

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Profil</h1>
      <pre className="mt-4 text-xs bg-gray-100 p-3 rounded">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
