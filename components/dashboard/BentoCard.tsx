"use client"

import React from "react"
import { motion } from "framer-motion"

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function BentoCard({ children, className = "", delay = 0 }: BentoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.01,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={`relative group rounded-3xl border border-card-border bg-card-bg/40 p-6 overflow-hidden transition-colors hover:border-accent-blue/50 ${className}`}
    >
      {/* Subtle border glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500">
        <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] rounded-full bg-accent-blue blur-[80px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] rounded-full bg-accent-purple blur-[80px]" />
      </div>

      {/* Background grain texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.article>
  )
}
