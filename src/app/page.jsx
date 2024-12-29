"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const resetAuth = useAuthStore((state) => state.resetAuth);

  useEffect(() => {
    resetAuth(); // Limpia el estado cuando regresas al login
  }, [resetAuth]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "password123") {
      const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
      setAuth(true, fakeToken);
      router.push("/dashboard");
    } else {
      setError("Incorrect credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div className="bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-sm w-full text-white">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="text-gray-300 mt-2">
            Please enter your details to sign in.
          </p>
        </div>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center text-gray-400">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 bg-transparent border-gray-400"
              />
              <span className="ml-2">Remember me</span>
            </label>
          </div>
          <button
            data-testid="login-button"
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-white transition"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center justify-center mt-6">
          <span className="border-t border-gray-600 flex-grow"></span>
          <span className="mx-2 text-gray-400">OR</span>
          <span className="border-t border-gray-600 flex-grow"></span>
        </div>
        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition text-white">
            <span className="mr-3">🌐</span> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition text-white">
            <span className="mr-3">🐱</span> Continue with GitHub
          </button>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
