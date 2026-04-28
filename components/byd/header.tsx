"use client"

import { Download } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [activeNav, setActiveNav] = useState<string>("mau-xe")

  const navItems = [
    { id: "mau-xe", label: "MẪU XE" },
    { id: "cong-nghe", label: "CÔNG NGHỆ" },
    { id: "trai-nghiem", label: "TRẢI NGHIỆM" },
    { id: "ve-byd", label: "VỀ BYD" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-white transition-all duration-300 hover:tracking-wide cursor-pointer hover:text-electric-blue">
            BYD
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className="relative text-xs font-medium uppercase tracking-widest text-white/70 transition-all duration-300 hover:text-white group"
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-electric-blue transition-all duration-300 ${
                  activeNav === item.id ? "w-full" : "w-0 group-hover:w-full"
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
