"use client";
import { useAuth } from "@/app/providers/AuthContextProvider";

const Dashboard: React.FC = () => {
  const { userDetails } = useAuth();

  if (!userDetails) {
    return (
      <div className="fixed top-1/2 left-1/2 bg-white border border-red-600 text-red-600 p-8 rounded-xl">
        You have to&nbsp;<a href="/sign-in">sign in first</a>
      </div>
    );
  }
  return <section className="px-8">Dashboard</section>;
};

export default Dashboard;
