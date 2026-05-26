import React from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { HeroTile } from "@/components/dashboard/HeroTile"
import { ActivityTile } from "@/components/dashboard/ActivityTile"
import { CourseSkeleton } from "@/components/dashboard/CourseSkeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      
      <main className="flex-1 lg:pl-[80px] pb-24 lg:pb-8">
        <div className="max-w-[1400px] mx-auto p-4 lg:p-8">
          <header className="mb-8">
            <div className="h-8 w-32 rounded bg-slate-800 animate-pulse mb-2" />
            <div className="h-4 w-48 rounded bg-slate-800 animate-pulse" />
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            <HeroTile />
            <ActivityTile />
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
          </section>
        </div>
      </main>
    </div>
  )
}
