import React from "react"
import { Sidebar } from "@/components/layout/Sidebar"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="flex-1 lg:pl-[80px] pb-24 lg:pb-8">
        <div className="mx-auto max-w-[1000px] p-4 lg:p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">My Courses</h1>
            <p className="mt-2 text-slate-400">Browse and manage your enrolled courses.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-card-border bg-card-bg/30 p-8 flex flex-col items-center justify-center text-center gap-4 lg:col-span-2">
               <div className="h-16 w-16 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                 <div className="h-8 w-8 rounded-full border-2 border-current border-t-transparent animate-spin" />
               </div>
               <div>
                 <h3 className="font-bold text-lg">Course list is coming soon</h3>
                 <p className="text-sm text-slate-500 max-w-sm mx-auto">We're currently syncing your course data. Please check back in a few moments.</p>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
