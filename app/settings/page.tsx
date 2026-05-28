import React from "react"
import { Sidebar } from "@/components/layout/Sidebar"

const settings = [
  { label: "Name", value: "Navneet Kumar" },
  { label: "Email", value: "[EMAIL_ADDRESS]" },
  { label: "Theme", value: "Dark" },
]

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="flex-1 lg:pl-[80px] pb-24 lg:pb-8">
        <div className="mx-auto max-w-[1000px] p-4 lg:p-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="mt-2 text-slate-400">Basic account preferences.</p>

          <div className="mt-8 rounded-3xl border border-card-border bg-card-bg/30 p-6">
            <div className="space-y-3">
              {settings.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-card-border bg-card-bg/40 px-4 py-3"
                >
                  <span className="text-slate-400">{item.label}</span>
                  <span className="font-medium text-slate-100">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
