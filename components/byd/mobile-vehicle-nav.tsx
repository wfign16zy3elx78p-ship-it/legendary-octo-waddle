"use client"

import { ChevronDown, MessageCircle, Sparkles, ChevronRight, X } from "lucide-react"
import { useState } from "react"

interface Vehicle {
  id: string
  name: string
  price: string
}

interface MobileVehicleNavProps {
  vehicles: Vehicle[]
  activeVehicle: string
  onVehicleChange: (vehicleId: string) => void
}

export function MobileVehicleNav({
  vehicles,
  activeVehicle,
  onVehicleChange,
}: MobileVehicleNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const currentVehicle = vehicles.find((v) => v.id === activeVehicle)

  return (
    <>
      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        {/* Glass background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/60 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-purple-500/5" />
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <div className="relative flex items-center justify-between px-4 py-3 safe-area-bottom">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-3 rounded-2xl bg-white/[0.06] ring-1 ring-white/10 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 active:scale-95 hover:bg-white/[0.1]"
          >
            <span className="transition-colors duration-300">{currentVehicle?.name || "Chọn xe"}</span>
            <ChevronDown
              className={`h-4 w-4 text-white/50 transition-all duration-300 ${isOpen ? "rotate-180 text-electric-blue" : ""}`}
            />
          </button>
          <button className="group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-electric-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/25 active:scale-95">
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <MessageCircle className="relative h-4 w-4" />
            <span className="relative">Tư vấn</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Dropdown Panel */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-500 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Glass Panel */}
        <div className="relative mx-2 mb-2 max-h-[75vh] overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.1] to-white/[0.04] backdrop-blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-purple-500/5" />
          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.12]" />
          {/* Top highlight */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric-blue/20 ring-1 ring-electric-blue/30">
                  <Sparkles className="h-4 w-4 text-electric-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Xe điện BYD</h3>
                  <p className="text-xs text-white/40">{vehicles.length} mẫu xe</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 transition-all duration-300 active:scale-90 hover:bg-white/[0.1]"
              >
                <X className="h-4 w-4 text-white/60" />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

            {/* Vehicle List */}
            <nav className="max-h-[50vh] py-3 px-3 pr-1 scrollbar-glass">
              <div className="space-y-1">
                {vehicles.map((vehicle, index) => (
                  <button
                    key={vehicle.id}
                    onClick={() => {
                      onVehicleChange(vehicle.id)
                      setIsOpen(false)
                    }}
                    className={`group relative flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left transition-all duration-300 active:scale-[0.98] ${
                      activeVehicle === vehicle.id
                        ? ""
                        : "hover:bg-white/[0.04]"
                    }`}
                    style={{ 
                      transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0)' : 'translateY(10px)'
                    }}
                  >
                    {/* Active background */}
                    {activeVehicle === vehicle.id && (
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-electric-blue/10 to-transparent" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-electric-blue/30 rounded-2xl" />
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 h-16 w-16 bg-electric-blue/30 blur-2xl" />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="relative flex flex-col">
                      <span
                        className={`text-[15px] font-medium transition-all duration-300 ${
                          activeVehicle === vehicle.id 
                            ? "text-white" 
                            : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {vehicle.name}
                      </span>
                      <span className="mt-0.5 text-sm text-white/40">
                        {vehicle.price}
                      </span>
                    </div>

                    {/* Arrow */}
                    <ChevronRight 
                      className={`relative h-4 w-4 transition-all duration-300 ${
                        activeVehicle === vehicle.id 
                          ? "text-electric-blue opacity-100" 
                          : "text-white/30 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </nav>

            {/* Safe area padding */}
            <div className="h-2 safe-area-bottom" />
          </div>
        </div>
      </div>
    </>
  )
}
