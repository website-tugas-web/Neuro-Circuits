"use client";

import { useEffect, useState } from "react";
import { getHealth } from "@/lib/api";

interface HealthStatus {
  status: string;
  timestamp: string;
  uptime: number;
}

export default function Home() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHealth()
      .then((data) => {
        setHealth(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || "Failed to connect to backend");
        setHealth(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <main className="flex flex-col items-center gap-8 px-4 py-16 text-center max-w-2xl">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            MedReflexed
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Frontend is running
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 w-full">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Backend Status
          </h2>

          {loading && (
            <p className="text-slate-600 dark:text-slate-300">
              Checking backend connection...
            </p>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-4 text-red-700 dark:text-red-300">
              ❌ {error}
            </div>
          )}

          {health && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-4">
              <p className="text-green-700 dark:text-green-300 font-semibold">
                ✓ Backend is {health.status}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                Uptime: {health.uptime.toFixed(2)}s
              </p>
              <p className="text-sm text-green-600 dark:text-green-400">
                Last check: {new Date(health.timestamp).toLocaleTimeString()}
              </p>
            </div>
          )}
        </div>

        <div className="text-slate-600 dark:text-slate-400 text-sm">
          <p>Frontend: Next.js 14+ with TypeScript and Tailwind CSS</p>
          <p>Backend: Express.js on http://localhost:3000</p>
        </div>
      </main>
    </div>
  );
}
