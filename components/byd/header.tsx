"use client"

import { Download } from "lucide-react"

interface HeaderProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navItems = [
]

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-white transition-all duration-300 hover:tracking-wide cursor-pointer hover:text-electric-blue">
            BYD
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-95 ${
                activeSection === item.id
                  ? "text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {item.label}
              {/* Active indicator with animation */}
              <span 
                className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-electric-blue transition-all duration-300 origin-center ${
                  activeSection === item.id 
                    ? "scale-x-100 opacity-100 glow-blue" 
                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="group relative overflow-hidden rounded-full glass-button px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg active:scale-95 glow-blue-hover">
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Đăng ký lái thử</span>
          </button>
          <button className="group p-2 text-white/50 transition-all duration-300 hover:text-white active:scale-90">
            <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  )
}
