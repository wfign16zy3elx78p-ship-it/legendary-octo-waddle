"use client"

import Image from "next/image"
import { Star, Zap, Battery, Zap as Lightning, Plug, Shield } from "lucide-react"
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

interface ViewAngle {
  id: string
  label: string
  image: string
}

interface HeroSectionProps {
  vehicle: Vehicle
  colors: CarColor[]
  selectedColor: CarColor
  onColorChange: (color: CarColor) => void
}

const viewAngles: ViewAngle[] = [
  { id: "front", label: "Trước", image: "/images/byd-atto3-white.jpg" },
  { id: "front-side", label: "Góc trước", image: "/images/byd-atto3-white.jpg" },
  { id: "side", label: "Cạnh", image: "/images/byd-atto3-white.jpg" },
  { id: "rear-side", label: "Góc sau", image: "/images/byd-atto3-white.jpg" },
  { id: "rear", label: "Sau", image: "/images/byd-atto3-white.jpg" },
]

export function HeroSection({ vehicle, colors, selectedColor, onColorChange }: HeroSectionProps) {
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [isVehicleChanging, setIsVehicleChanging] = useState(false)
  const [prevVehicleId, setPrevVehicleId] = useState(vehicle.id)
  const [selectedAngle, setSelectedAngle] = useState<string>("front-side")

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
    <section className="relative min-h-screen pt-16 overflow-hidden glow-radial-canvas">
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-12 lg:py-0">
          {/* Badge */}
          <span
            className={`mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-label text-text-secondary transition-all duration-500 ${
              isVehicleChanging ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <Zap className="h-3 w-3 text-accent-tech" />
            Xe ô tô điện
          </span>

          {/* Title */}
          <div
            className={`mb-6 transition-all duration-500 delay-75 ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <p className="text-lg font-normal text-text-secondary">{vehicle.year}</p>
            <h1 className="mt-2 text-5xl font-semibold tracking-tight-hero text-white lg:text-[48px] leading-[1.1]">
              {vehicle.name}
            </h1>
            <p className="mt-4 text-lg font-normal text-text-secondary leading-relaxed">
              Năng lượng xanh, cho tương lai bền vững
            </p>
          </div>

          {/* Color Name - Glass Card */}
          <div
            className={`mb-8 inline-flex w-fit items-center gap-3 rounded-full glass px-5 py-2.5 transition-all duration-300 ${
              isImageLoading ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
            }`}
          >
            <span
              className="h-4 w-4 rounded-full ring-2 ring-white/20"
              style={{ backgroundColor: selectedColor.hex }}
            />
            <span className="text-sm font-medium text-white">{selectedColor.name}</span>
            <span className="text-sm text-text-secondary">{selectedColor.nameVi}</span>
          </div>

          {/* Stats - Glass Cards */}
          <div
            className={`mb-8 flex gap-4 transition-all duration-500 delay-100 ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <div className="glass-card rounded-2xl px-6 py-4">
              <p className="text-2xl font-semibold text-white lg:text-3xl leading-tight">
                {vehicle.priceFormatted}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-label text-text-secondary">
                Giá bán niêm yết
              </p>
            </div>
            <div className="glass-card rounded-2xl px-6 py-4">
              <div className="flex items-center gap-2">
                <Battery className="h-5 w-5 text-status-success" />
                <p className="text-2xl font-semibold text-white lg:text-3xl leading-tight">
                  {vehicle.range}
                </p>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-label text-text-secondary">
                Quãng đường
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-10 flex gap-4 transition-all duration-500 delay-150 ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent-tech to-[#005ecb] px-8 py-3 text-sm font-semibold tracking-nav text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                <span>Đặt lái thử ngay</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button className="group relative overflow-hidden rounded-full glass-button px-8 py-3 text-sm font-semibold tracking-nav text-white transition-all duration-300 hover:bg-surface-pressed active:scale-[0.98]">
              <span className="relative">Khám phá xe</span>
            </button>
          </div>

          {/* Spec Bar */}
          <div
            className={`mb-8 border-t border-stroke-light pt-8 transition-all duration-500 delay-200 ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <div className="flex flex-wrap gap-0">
              {/* 0-100 km/h */}
              <div className="flex flex-1 min-w-[140px] items-start gap-3 pr-6 border-r border-stroke-light last:border-r-0">
                <div className="rounded-full bg-surface-pressed p-2.5">
                  <Lightning className="h-4 w-4 text-accent-tech" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">0 – 100 km/h</p>
                  <p className="text-xs text-text-secondary">7.3 giây</p>
                </div>
              </div>

              {/* Pin Blade Battery */}
              <div className="flex flex-1 min-w-[140px] items-start gap-3 px-6 border-r border-stroke-light last:border-r-0">
                <div className="rounded-full bg-surface-pressed p-2.5">
                  <Battery className="h-4 w-4 text-accent-tech" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Pin Blade Battery</p>
                  <p className="text-xs text-text-secondary">An toàn tuyệt đối</p>
                </div>
              </div>

              {/* Sạc nhanh DC */}
              <div className="flex flex-1 min-w-[140px] items-start gap-3 px-6 border-r border-stroke-light last:border-r-0">
                <div className="rounded-full bg-surface-pressed p-2.5">
                  <Plug className="h-4 w-4 text-accent-tech" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Sạc nhanh DC</p>
                  <p className="text-xs text-text-secondary">30% – 80% chỉ 30 phút</p>
                </div>
              </div>

              {/* Bảo hành */}
              <div className="flex flex-1 min-w-[140px] items-start gap-3 pl-6">
                <div className="rounded-full bg-surface-pressed p-2.5">
                  <Shield className="h-4 w-4 text-accent-tech" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Bảo hành</p>
                  <p className="text-xs text-text-secondary">6 năm / 150.000 km</p>
                </div>
              </div>
            </div>
          </div>

          {/* 360 View Section */}
          <div
            className={`mb-8 border-t border-stroke-light pt-8 transition-all duration-500 delay-300 ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent-tech" />
              <h3 className="text-lg font-semibold text-white">360°</h3>
            </div>
            <p className="mb-4 text-sm text-text-secondary">Kéo để xoay xe</p>

            {/* Gallery Strip */}
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {viewAngles.map((angle) => (
                <button
                  key={angle.id}
                  onClick={() => setSelectedAngle(angle.id)}
                  className={`group relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedAngle === angle.id
                      ? "ring-2 ring-accent-tech bg-surface-pressed"
                      : "ring-1 ring-stroke-light hover:ring-white/20"
                  }`}
                >
                  <div className="relative h-20 w-32 bg-canvas">
                    <Image
                      src={angle.image}
                      alt={angle.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {angle.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div
            className={`transition-all duration-500 delay-400 ${
              isVehicleChanging ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-label text-text-secondary">
              Chọn màu xe
            </p>
            <div className="flex items-center gap-3">
              {colors.map((color, index) => (
                <button
                  key={color.id}
                  onClick={() => onColorChange(color)}
                  className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 active:scale-[0.98] ${
                    selectedColor.id === color.id
                      ? "ring-2 ring-accent-tech scale-110"
                      : "ring-1 ring-stroke-light hover:scale-125"
                  }`}
                  style={{
                    backgroundColor: color.hex,
                    transitionDelay: `${index * 50}ms`,
                    boxShadow: selectedColor.id === color.id ? `0 0 20px ${color.hex}40` : undefined,
                  }}
                  title={color.name}
                >
                  {selectedColor.id === color.id && (
                    <span className="h-2.5 w-2.5 rounded-full bg-white ring-1 ring-white/50" />
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-text-secondary">
              <span>{colors.length} màu sắc</span>
              <Star className="h-3 w-3 fill-current transition-transform duration-300 hover:scale-125 hover:text-status-warning" />
            </div>
          </div>
        </div>

        {/* Right - Car Image */}
        <div className="relative flex flex-1 items-center justify-center px-6 lg:px-0">
          {/* Radial glow behind car */}
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
              alt={`BYD ${vehicle.name} – ${selectedColor.name}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

