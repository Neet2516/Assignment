"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  LayoutDashboard, 
  BookOpen, 
  Settings, 
  ChevronRight,
  User,
  Activity,
  X
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Courses", icon: BookOpen, href: "/courses" },
  { name: "Activity", icon: Activity, href: "/activity" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-card-border bg-background/80 px-4 backdrop-blur-md lg:hidden">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="relative flex flex-col items-center gap-1">
            <item.icon size={20} className={pathname === item.href ? "text-accent-blue" : "text-slate-400"} />
            <span className={`text-[10px] ${pathname === item.href ? "text-accent-blue" : "text-slate-400"}`}>
              {item.name}
            </span>
            {pathname === item.href && (
              <motion.div
                layoutId="mobileNav"
                className="absolute -top-2 h-1 w-8 rounded-full bg-accent-blue"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>

      {/* Desktop/Tablet Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 260 }}
        className="fixed left-0 top-0 z-40 hidden h-screen border-r border-card-border bg-background/50 backdrop-blur-xl lg:flex flex-col"
      >
        <div className="flex h-20 items-center justify-between px-6">
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-2 font-bold text-xl text-accent-blue"
              >
                <div className="h-8 w-8 rounded-lg bg-accent-blue flex items-center justify-center">
                  <BookOpen className="text-white" size={20} />
                </div>
                <span>EDU-LITE</span>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="rounded-lg p-2 hover:bg-card-bg text-slate-400 hover:text-white transition-colors"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <X size={20} />}
          </button>
        </div>

        <div className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div className="relative group">
                <div
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${
                    pathname === item.href 
                      ? "text-white" 
                      : "text-slate-400 hover:text-white hover:bg-card-bg/50"
                  }`}
                >
                  <item.icon size={22} />
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-medium"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </div>
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 z-[-1] rounded-xl bg-accent-blue/10 border border-accent-blue/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-card-border">
          <div className={`flex items-center gap-3 p-2 rounded-xl bg-card-bg/50 ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="h-10 w-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple">
              <User size={20} />
            </div>
            {!isCollapsed && (
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Navneet</p>
                <p className="text-xs text-slate-500 truncate">Pro Learner</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>
    </>
  )
}
