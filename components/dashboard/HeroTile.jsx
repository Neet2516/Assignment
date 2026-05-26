"use client"

import React from "react"
import { BentoCard } from "./BentoCard"
import { Flame, Star } from "lucide-react"
import { motion } from "framer-motion"

export function HeroTile() {
  return (
    <BentoCard className="lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-card-bg/80 to-accent-blue/5">
      <div className="flex flex-col h-full justify-between gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold tracking-tight"
          >
            Welcome back, <span className="text-accent-blue">Alex!</span>
          </motion.h1>
          <p className="text-slate-400 mt-2">You&apos;ve completed 85% of your weekly goals. Keep it up!</p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 bg-card-bg/50 border border-card-border rounded-2xl px-4 py-3">
            <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
              <Flame size={22} fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-medium">Daily Streak</p>
              <p className="text-lg font-bold">12 Days</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-card-bg/50 border border-card-border rounded-2xl px-4 py-3">
            <div className="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
              <Star size={22} fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-medium">Points Earned</p>
              <p className="text-lg font-bold">2,450 XP</p>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  )
}
