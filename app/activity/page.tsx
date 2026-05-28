import React from "react"
import { Sidebar } from "@/components/layout/Sidebar"

const activities = [
  "Completed lesson: Advanced React Patterns",
  "Started Next.js App Router Masterclass",
  "Updated progress in UI/UX Design Fundamentals",
]

export default function ActivityPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="flex-1 lg:pl-[80px] pb-24 lg:pb-8">
        <div className="mx-auto max-w-[1000px] p-4 lg:p-8">
          <h1 className="text-3xl font-bold">Activity</h1>
          <p className="mt-2 text-slate-400">Recent learning updates.</p>

          <div className="mt-8 rounded-3xl border border-card-border bg-card-bg/30 p-6">
            <ul className="space-y-3">
              {activities.map((activity) => (
                <li
                  key={activity}
                  className="rounded-2xl border border-card-border bg-card-bg/40 px-4 py-3 text-slate-200"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
