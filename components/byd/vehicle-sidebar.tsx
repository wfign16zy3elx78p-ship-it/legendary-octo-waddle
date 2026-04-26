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
    <aside className="fixed right-0 top-20 z-40 hidden h-[calc(100vh-5rem)] w-80 flex-col lg:flex">
      {/* Glass Background with gradient border */}
      <div className="absolute inset-0 rounded-l-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-purple-500/5" />
        {/* Top highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {/* Left border glow */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
      </div>

      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-electric-blue/20 ring-1 ring-electric-blue/30">
              <Sparkles className="h-4 w-4 text-electric-blue" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Xe điện BYD</h2>
              <p className="text-xs text-white/40">{vehicles.length} mẫu xe</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        {/* Vehicle List */}
        <nav className="flex-1 py-4 px-3 pr-1 scrollbar-glass">
          <div className="space-y-1">
            {vehicles.map((vehicle, index) => (
              <button
                key={vehicle.id}
                onClick={() => onVehicleChange(vehicle.id)}
                className={`group relative flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition-all duration-300 active:scale-[0.98] ${
                  activeVehicle === vehicle.id
                    ? ""
                    : "hover:bg-white/[0.04]"
                }`}
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                {/* Active background */}
                {activeVehicle === vehicle.id && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-electric-blue/10 to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-electric-blue/30 rounded-2xl" />
                    {/* Subtle glow */}
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 h-20 w-20 bg-electric-blue/30 blur-2xl" />
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

                {/* Arrow indicator */}
                <ChevronRight 
                  className={`relative h-4 w-4 transition-all duration-300 ${
                    activeVehicle === vehicle.id 
                      ? "text-electric-blue opacity-100 translate-x-0" 
                      : "text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </nav>

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        {/* Chat CTA */}
        <div className="p-5">
          <button className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-electric-blue px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/25 active:scale-[0.98]">
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            {/* Glow */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-transparent to-white/10" />
            <MessageCircle className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative">Chat tư vấn ngay</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
