"use client"

import { Download } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [activeNav, setActiveNav] = useState<string>("mau-xe")

  const navItems = [
    { id: "mau-xe", label: "Mẫu xe" },
    { id: "cong-nghe", label: "Công nghệ" },
    { id: "trai-nghiem", label: "Trải nghiệm" },
    { id: "ve-byd", label: "Về BYD" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav h-16">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-semibold tracking-tight-hero text-white transition-all duration-300 hover:tracking-normal cursor-pointer hover:text-accent-tech">
            BYD
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className="relative text-sm font-medium tracking-nav text-text-secondary transition-all duration-300 hover:text-white group"
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-accent-tech transition-all duration-300 ${
                  activeNav === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent-tech to-[#005ecb] px-6 py-2.5 text-sm font-semibold tracking-nav text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative">Đăng ký lái thử</span>
          </button>
          <button className="group flex h-10 w-10 items-center justify-center rounded-full glass text-white/50 transition-all duration-300 hover:text-white hover:scale-105 active:scale-95">
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

