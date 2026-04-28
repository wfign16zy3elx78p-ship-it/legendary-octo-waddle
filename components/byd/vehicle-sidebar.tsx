"use client"

import { MessageCircle, Sparkles, ChevronRight } from "lucide-react"

interface Vehicle {
  id: string
  name: string
  price: string
}

interface VehicleSidebarProps {
  vehicles: Vehicle[]
  activeVehicle: string
  onVehicleChange: (vehicleId: string) => void
}

export function VehicleSidebar({ vehicles, activeVehicle, onVehicleChange }: VehicleSidebarProps) {
  return (
    <aside className="fixed right-0 top-16 z-40 hidden h-[calc(100vh-4rem)] w-64 flex-col lg:flex glass-sidebar">
      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-pressed ring-1 ring-accent-tech/30">
              <Sparkles className="h-4 w-4 text-accent-tech" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Xe điện BYD</h2>
              <p className="text-xs text-text-secondary">{vehicles.length} mẫu xe</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-stroke-light" />

        {/* Vehicle List */}
        <nav className="flex-1 py-3 px-3 scrollbar-glass">
          <div className="space-y-1">
            {vehicles.map((vehicle, index) => (
              <button
                key={vehicle.id}
                onClick={() => onVehicleChange(vehicle.id)}
                className={`group relative flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-300 active:scale-[0.98] ${
                  activeVehicle === vehicle.id
                    ? "bg-surface-pressed"
                    : "hover:bg-white/[0.03]"
                }`}
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                {/* Active indicator — left 3px accent bar */}
                {activeVehicle === vehicle.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-r-full bg-accent-tech" />
                )}

                {/* Glow behind active item */}
                {activeVehicle === vehicle.id && (
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 h-16 w-16 bg-accent-tech/20 blur-2xl rounded-full pointer-events-none" />
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

                {/* Arrow indicator */}
                <ChevronRight
                  className={`relative h-4 w-4 transition-all duration-300 ${
                    activeVehicle === vehicle.id
                      ? "text-accent-tech opacity-100 translate-x-0"
                      : "text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </nav>

        {/* Divider */}
        <div className="mx-6 h-px bg-stroke-light" />

        {/* Chat CTA */}
        <div className="p-5">
          <button className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-accent-tech to-[#005ecb] px-5 py-3.5 text-sm font-semibold tracking-nav text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <MessageCircle className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative">Chat tư vấn ngay</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

