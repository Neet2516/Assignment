"use client"

import React from "react"
import { BentoCard } from "./BentoCard"
import { motion } from "framer-motion"

export function ActivityTile() {
  // Static mock activity data (14 days)
  const activityData = [1, 2, 4, 3, 2, 1, 0, 2, 3, 4, 1, 2, 3, 4]

  return (
    <BentoCard className="lg:col-span-1 lg:row-span-1">
      <div className="flex flex-col h-full gap-4">
        <h3 className="font-bold text-lg">Activity</h3>
        
        <div className="flex-1 flex items-end justify-between gap-1">
          {activityData.slice(-14).map((value, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${value * 20 + 10}%` }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 * i,
                  type: "spring",
                  stiffness: 100
                }}
                className={`w-full rounded-t-md ${
                  value === 0 ? 'bg-slate-800' : 
                  value === 1 ? 'bg-accent-blue/40' :
                  value === 2 ? 'bg-accent-blue/60' :
                  value === 3 ? 'bg-accent-blue/80' : 'bg-accent-blue'
                }`}
              />
              <span className="text-[8px] text-slate-500">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i % 7]}
              </span>
            </div>
          ))}
        </div>
        
        <div className="pt-2 border-t border-card-border flex justify-between items-center text-xs">
          <span className="text-slate-400">Total Hours</span>
          <span className="font-bold text-accent-purple">42.5h</span>
        </div>
      </div>
    </BentoCard>
  )
}
