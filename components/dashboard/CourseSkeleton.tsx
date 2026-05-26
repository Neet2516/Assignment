"use client"

import React from "react"
import { motion } from "framer-motion"

export function CourseSkeleton() {
  return (
    <div className="rounded-3xl border border-card-border bg-card-bg/40 p-6 overflow-hidden flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-12 w-12 rounded-2xl bg-slate-800"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          className="h-6 w-16 rounded-full bg-slate-800"
        />
      </div>
      
      <div className="flex-1 space-y-2">
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          className="h-6 w-3/4 rounded-lg bg-slate-800"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          className="h-4 w-1/2 rounded-lg bg-slate-800"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
            className="h-3 w-12 rounded bg-slate-800"
          />
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1.0 }}
            className="h-3 w-8 rounded bg-slate-800"
          />
        </div>
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
          className="h-2 w-full rounded-full bg-slate-800"
        />
      </div>
    </div>
  )
}
