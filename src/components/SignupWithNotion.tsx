"use client";

export function SignupWithNotion() {
  const onClick = () => {
    window.location.href = "/api/auth/notion";
  };
  return (
    <button
      onClick={onClick}
      className="rounded-xl px-4 py-2 border text-sm"
      aria-label="S’inscrire avec Notion"
    >
      S’inscrire avec Notion
    </button>
  );
}
