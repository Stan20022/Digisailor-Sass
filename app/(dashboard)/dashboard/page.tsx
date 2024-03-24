"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

Dashboard.requireAuth = true

export default function Dashboard() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in");
    },
  });

  return (
    <div className="p-8">
      <div className="text-black">{session?.data?.user?.email}</div>
      <button className="text-black" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}