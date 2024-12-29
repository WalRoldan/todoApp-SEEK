"use client";

import TaskList from "../../components/TaskList";
import useAuthStore from "../../store/authStore";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br  from-gray-900 via-blue-900 to-black">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {isAuthenticated ? (
          <TaskList />
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-50 text-lg">Loading...</div>
          </div>
        )}
      </div>
    </div>
  );
}
