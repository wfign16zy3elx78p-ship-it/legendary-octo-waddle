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
        <div className="absolute inset-0 glass-sidebar border-t border-stroke-light" />

        <div className="relative flex items-center justify-between px-4 py-3 safe-area-bottom">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-3 rounded-full glass px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 active:scale-95 hover:bg-white/[0.05]"
          >
            <span className="transition-colors duration-300">{currentVehicle?.name || "Chọn xe"}</span>
            <ChevronDown
              className={`h-4 w-4 text-text-secondary transition-all duration-300 ${isOpen ? "rotate-180 text-accent-tech" : ""}`}
            />
          </button>
          <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent-tech to-[#005ecb] px-5 py-2.5 text-sm font-semibold tracking-nav text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
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
        <div className="relative mx-2 mb-2 max-h-[75vh] overflow-hidden rounded-2xl glass-card">
          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-pressed ring-1 ring-accent-tech/30">
                  <Sparkles className="h-4 w-4 text-accent-tech" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Xe điện BYD</h3>
                  <p className="text-xs text-text-secondary">{vehicles.length} mẫu xe</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full glass transition-all duration-300 active:scale-90 hover:bg-white/[0.05]"
              >
                <X className="h-4 w-4 text-text-secondary" />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-stroke-light" />

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
                    className={`group relative flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-300 active:scale-[0.98] ${
                      activeVehicle === vehicle.id
                        ? "bg-surface-pressed"
                        : "hover:bg-white/[0.03]"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 30}ms` : "0ms",
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateY(0)" : "translateY(10px)",
                    }}
                  >
                    {/* Active indicator */}
                    {activeVehicle === vehicle.id && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-r-full bg-accent-tech" />
                    )}

                    {/* Content */}
                    <div className="relative flex flex-col pl-1">
                      <span
                        className={`text-[15px] font-medium transition-all duration-300 ${
                          activeVehicle === vehicle.id
                            ? "text-white"
                            : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {vehicle.name}
                      </span>
                      <span className="mt-0.5 text-sm text-text-secondary">
                        {vehicle.price}
                      </span>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      className={`relative h-4 w-4 transition-all duration-300 ${
                        activeVehicle === vehicle.id
                          ? "text-accent-tech opacity-100"
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

