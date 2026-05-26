"use client"

import React from "react"
import { BentoCard } from "./BentoCard"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import { type Course } from "@/types/database"

interface CourseTileProps {
  course: Course
  delay?: number
}

export function CourseTile({ course, delay = 0 }: CourseTileProps) {
  // Dynamically get the icon from Lucide
  const IconComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[course.icon_name] || LucideIcons.BookOpen

  return (
    <BentoCard delay={delay} className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="h-12 w-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20">
          <IconComponent size={24} />
        </div>
        <div className="text-xs font-semibold px-2 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
          Active
        </div>
      </div>
      
      <div className="flex-1">
        <h3 className="font-bold text-lg leading-tight group-hover:text-accent-blue transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">Updated recently</p>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-slate-400">Progress</span>
          <span className="text-accent-blue">{course.progress}%</span>
        </div>
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ 
              duration: 1.5, 
              delay: delay + 0.5,
              type: "spring",
              stiffness: 50,
              damping: 15
            }}
            className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </BentoCard>
  )
}
