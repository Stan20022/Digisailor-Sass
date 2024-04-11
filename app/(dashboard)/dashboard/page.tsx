"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Dashboard: React.FC = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in");
    },
  });

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <div className="flex justify-center items-center">
        <Button variant="secondary" onClick={() => signOut()} className="mt-4">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
