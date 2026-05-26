import React, { Suspense } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { HeroTile } from "@/components/dashboard/HeroTile"
import { ActivityTile } from "@/components/dashboard/ActivityTile"
import { CourseTile } from "@/components/dashboard/CourseTile"
import { CourseSkeleton } from "@/components/dashboard/CourseSkeleton"
import { createClient } from "@/lib/supabase/server"
import { type Course } from "@/types/database"
import { AlertCircle } from "lucide-react"

function getSupabaseErrorDetails(error: unknown) {
  if (!error || typeof error !== "object") {
    return {
      message: "Please check your Supabase connection and environment variables.",
      setupSql: null as string | null,
    }
  }

  const message =
    "message" in error && typeof error.message === "string" ? error.message : null
  const details =
    "details" in error && typeof error.details === "string" ? error.details : null
  const hint = "hint" in error && typeof error.hint === "string" ? error.hint : null

  const resolvedMessage =
    [message, details, hint].filter(Boolean).join(" ") ||
    "Please check your Supabase connection and environment variables."

  if (resolvedMessage.includes("Could not find the table 'public.courses'")) {
    return {
      message: "Your Supabase project is connected, but the required `public.courses` table has not been created yet.",
      setupSql: `create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default now()
);

insert into courses (title, progress, icon_name) values
('Advanced React Patterns', 75, 'Code2'),
('Next.js App Router Masterclass', 40, 'Zap'),
('UI/UX Design Fundamentals', 90, 'Palette'),
('Fullstack Type-Safe APIs', 20, 'ShieldCheck');`,
    }
  }

  return {
    message: resolvedMessage,
    setupSql: null as string | null,
  }
}

async function CourseList() {
  const supabase = await createClient()
  
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    const { message, setupSql } = getSupabaseErrorDetails(error)

    return (
      <div className="lg:col-span-3 p-8 rounded-3xl border border-red-500/20 bg-red-500/5 text-red-400 flex flex-col items-center gap-4">
        <AlertCircle size={48} />
        <div className="text-center max-w-2xl">
          <h3 className="font-bold text-lg">Failed to load courses</h3>
          <p className="text-sm opacity-80">{message}</p>
        </div>
        {setupSql ? (
          <pre className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-left text-xs leading-6 text-slate-200">
            <code>{setupSql}</code>
          </pre>
        ) : null}
      </div>
    )
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="lg:col-span-3 p-8 rounded-3xl border border-slate-700 bg-card-bg/20 text-slate-400 flex flex-col items-center gap-4">
        <p>No courses found in your database.</p>
      </div>
    )
  }

  return (
    <>
      {courses.map((course: Course, index: number) => (
        <CourseTile key={course.id} course={course} delay={0.1 * (index + 3)} />
      ))}
    </>
  )
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground selection:bg-accent-blue/30">
      <Sidebar />
      
      <main className="flex-1 lg:pl-[80px] pb-24 lg:pb-8">
        <div className="max-w-[1400px] mx-auto p-4 lg:p-8">
          <header className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-slate-500 font-medium">Dashboard</h2>
              <p className="text-sm text-slate-600">Overview of your learning progress</p>
            </div>
            
            <div className="h-10 w-10 rounded-full border border-card-border bg-card-bg/50 flex items-center justify-center lg:hidden">
              <div className="h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            <HeroTile />
            <ActivityTile />
            
            <Suspense fallback={
              <>
                <CourseSkeleton />
                <CourseSkeleton />
                <CourseSkeleton />
              </>
            }>
              <CourseList />
            </Suspense>
          </section>
        </div>
      </main>
    </div>
  )
}
