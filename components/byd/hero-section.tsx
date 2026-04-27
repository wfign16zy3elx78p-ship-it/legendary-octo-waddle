"use client"

import Image from "next/image"
import { Star, Zap, Battery } from "lucide-react"
import { useState, useEffect } from "react"

interface CarColor {
  id: string
  name: string
  nameVi: string
  hex: string
  image: string
}

interface Vehicle {
  id: string
  name: string
  year: string
  price: string
  priceFormatted: string
  range: string
  colors: CarColor[]
}

interface HeroSectionProps {
  vehicle: Vehicle
  colors: CarColor[]
  selectedColor: CarColor
  onColorChange: (color: CarColor) => void
  onViewInfo: () => void
}

export function HeroSection({ vehicle, colors, selectedColor, onColorChange, onViewInfo }: HeroSectionProps) {
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [isVehicleChanging, setIsVehicleChanging] = useState(false)
  const [prevVehicleId, setPrevVehicleId] = useState(vehicle.id)

  // Detect vehicle change for animation
  useEffect(() => {
    if (vehicle.id !== prevVehicleId) {
      setIsVehicleChanging(true)
      const timer = setTimeout(() => {
        setIsVehicleChanging(false)
        setPrevVehicleId(vehicle.id)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [vehicle.id, prevVehicleId])

  // Detect color change for image animation
  useEffect(() => {
    setIsImageLoading(true)
    const timer = setTimeout(() => setIsImageLoading(false), 300)
    return () => clearTimeout(timer)
  }, [selectedColor.id])

  return (
    <section className="relative min-h-screen bg-gradient-animate pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative flex min-h-[calc(100vh-5rem)] flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-12 lg:py-0">
          {/* Badge */}
          <span 
            className={`mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/50 transition-all duration-500 ${
              isVehicleChanging ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <Zap className="h-3 w-3 text-electric-blue" />
            Xe ô tô điện
          </span>

          {/* Title */}
          <div 
            className={`mb-6 transition-all duration-500 delay-75 ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <p className="text-lg font-medium text-white/60">{vehicle.year}</p>
            <h1 className="text-5xl font-bold uppercase tracking-tight text-white lg:text-7xl">
              {vehicle.name}
            </h1>
          </div>

          {/* Color Name - Glass Card */}
          <div 
            className={`mb-8 inline-flex w-fit items-center gap-3 rounded-full glass-button px-5 py-2.5 transition-all duration-300 ${
              isImageLoading ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
            }`}
          >
            <span 
              className="h-4 w-4 rounded-full ring-2 ring-white/20" 
              style={{ backgroundColor: selectedColor.hex }} 
            />
            <span className="text-sm font-medium text-white">{selectedColor.name}</span>
            <span className="text-sm text-white/50">{selectedColor.nameVi}</span>
          </div>

          {/* Stats - Glass Cards */}
          <div 
            className={`mb-8 flex gap-4 transition-all duration-500 delay-100 ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <div className="glass-card rounded-2xl px-6 py-4">
              <p className="text-2xl font-bold text-white lg:text-3xl">
                {vehicle.priceFormatted}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/40">
                Giá bán niêm yết
              </p>
            </div>
            <div className="glass-card rounded-2xl px-6 py-4">
              <div className="flex items-center gap-2">
                <Battery className="h-5 w-5 text-green-400" />
                <p className="text-2xl font-bold text-white lg:text-3xl">
                  {vehicle.range}
                </p>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/40">
                Quãng đường
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onViewInfo}
            className={`group relative mb-10 w-fit overflow-hidden rounded-full glass-button px-8 py-4 text-sm font-medium text-white transition-all duration-500 delay-150 active:scale-95 glow-blue-hover ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              <span>Xem thông tin</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          {/* Color Selector */}
          <div 
            className={`transition-all duration-500 delay-200 ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">
              Chọn màu xe
            </p>
            <div className="flex items-center gap-3">
              {colors.map((color, index) => (
                <button
                  key={color.id}
                  onClick={() => onColorChange(color)}
                  className={`group relative h-10 w-10 rounded-full transition-all duration-300 active:scale-90 ${
                    selectedColor.id === color.id
                      ? "scale-110 ring-2 ring-electric-blue ring-offset-4 ring-offset-black"
                      : "hover:scale-125 hover:shadow-lg ring-1 ring-white/20"
                  }`}
                  style={{ 
                    backgroundColor: color.hex,
                    transitionDelay: `${index * 50}ms`,
                    boxShadow: selectedColor.id === color.id ? `0 0 20px ${color.hex}40` : undefined
                  }}
                  title={color.name}
                >
                  {selectedColor.id === color.id && (
                    <span className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ backgroundColor: color.hex }} />
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-white/40">
              <span>{colors.length} màu sắc</span>
              <Star className="h-3 w-3 fill-current transition-transform duration-300 hover:scale-125 hover:text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Right - Car Image */}
        <div className="relative flex flex-1 items-center justify-center px-6 lg:px-0">
          {/* Glow behind car */}
          <div 
            className={`absolute inset-0 transition-all duration-700 ${
              isImageLoading || isVehicleChanging ? "opacity-0" : "opacity-100"
            }`}
            style={{
              background: `radial-gradient(ellipse at center, ${selectedColor.hex}15 0%, transparent 60%)`,
            }}
          />
          <div 
            className={`relative aspect-[4/3] w-full max-w-2xl transition-all duration-500 ${
              isImageLoading || isVehicleChanging
                ? "scale-95 opacity-0 blur-sm" 
                : "scale-100 opacity-100 blur-0"
            }`}
          >
            <Image
              src={selectedColor.image}
              alt={`BYD ${vehicle.name} - ${selectedColor.name}`}
              fill
              className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
