import { SignupWithNotion } from "@/components/SignupWithNotion";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Starter-SaaS</h1>
      <p className="mt-2">Auth Notion → Stripe (bientôt) → Dashboard</p>
      <div className="mt-6">
        <SignupWithNotion />
      </div>
    </main>
  );
}
