"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/byd/header"
import { HeroSection } from "@/components/byd/hero-section"
import { VehicleSidebar } from "@/components/byd/vehicle-sidebar"
import { MobileVehicleNav } from "@/components/byd/mobile-vehicle-nav"

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

const vehiclesData: Vehicle[] = [
  {
    id: "dolphin",
    name: "Dolphin",
    year: "2024 / 2025",
    price: "Từ 659 triệu",
    priceFormatted: "659.000.000 đ",
    range: "410 km",
    colors: [
      { id: "white", name: "Coral White", nameVi: "Trắng san hô", hex: "#F5F5F5", image: "/images/byd-dolphin-white.jpg" },
      { id: "blue", name: "Blue Ocean", nameVi: "Xanh đại dương", hex: "#2B4B7C", image: "/images/byd-dolphin-white.jpg" },
      { id: "pink", name: "Cherry Pink", nameVi: "Hồng anh đào", hex: "#E8A0B0", image: "/images/byd-dolphin-white.jpg" },
    ],
  },
  {
    id: "atto2",
    name: "Atto 2",
    year: "2024 / 2025",
    price: "Từ 599 triệu",
    priceFormatted: "599.000.000 đ",
    range: "380 km",
    colors: [
      { id: "white", name: "Pure White", nameVi: "Trắng tinh khôi", hex: "#F5F5F5", image: "/images/byd-atto2-white.jpg" },
      { id: "gray", name: "Urban Gray", nameVi: "Xám đô thị", hex: "#5C5C5C", image: "/images/byd-atto2-white.jpg" },
      { id: "blue", name: "Sky Blue", nameVi: "Xanh bầu trời", hex: "#4A90D9", image: "/images/byd-atto2-white.jpg" },
    ],
  },
  {
    id: "atto3",
    name: "Atto 3",
    year: "2024 / 2025",
    price: "Từ 766 triệu",
    priceFormatted: "766.000.000 đ",
    range: "420 km",
    colors: [
      { id: "white", name: "Crystal White", nameVi: "Tinh tế vĩnh cửu", hex: "#F5F5F5", image: "/images/byd-atto3-white.jpg" },
      { id: "blue", name: "Ocean Blue", nameVi: "Đại dương sâu thẳm", hex: "#2B4B7C", image: "/images/byd-atto3-blue.jpg" },
      { id: "red", name: "Racing Red", nameVi: "Đỏ đam mê", hex: "#C41E3A", image: "/images/byd-atto3-red.jpg" },
      { id: "gray", name: "Space Gray", nameVi: "Xám không gian", hex: "#5C5C5C", image: "/images/byd-atto3-gray.jpg" },
      { id: "green", name: "Forest Green", nameVi: "Xanh rừng nguyên sinh", hex: "#2D5A45", image: "/images/byd-atto3-green.jpg" },
    ],
  },
  {
    id: "sealion6",
    name: "Sealion 6",
    year: "2024 / 2025",
    price: "Từ 899 triệu",
    priceFormatted: "899.000.000 đ",
    range: "520 km",
    colors: [
      { id: "white", name: "Pearl White", nameVi: "Trắng ngọc trai", hex: "#F5F5F5", image: "/images/byd-sealion6-white.jpg" },
      { id: "black", name: "Cosmos Black", nameVi: "Đen vũ trụ", hex: "#1A1A1A", image: "/images/byd-sealion6-white.jpg" },
      { id: "silver", name: "Moonlight Silver", nameVi: "Bạc ánh trăng", hex: "#C0C0C0", image: "/images/byd-sealion6-white.jpg" },
    ],
  },
  {
    id: "seal",
    name: "Seal",
    year: "2024 / 2025",
    price: "Từ 1.1 tỷ",
    priceFormatted: "1.100.000.000 đ",
    range: "570 km",
    colors: [
      { id: "white", name: "Aurora White", nameVi: "Trắng cực quang", hex: "#F5F5F5", image: "/images/byd-seal-white.jpg" },
      { id: "blue", name: "Atlantic Blue", nameVi: "Xanh Đại Tây Dương", hex: "#1E3A5F", image: "/images/byd-seal-white.jpg" },
      { id: "red", name: "Flame Red", nameVi: "Đỏ lửa", hex: "#B22222", image: "/images/byd-seal-white.jpg" },
      { id: "gray", name: "Titanium Gray", nameVi: "Xám titan", hex: "#6E6E6E", image: "/images/byd-seal-white.jpg" },
    ],
  },
  {
    id: "sealion7",
    name: "Sealion 7",
    year: "2024 / 2025",
    price: "Từ 1.3 tỷ",
    priceFormatted: "1.300.000.000 đ",
    range: "610 km",
    colors: [
      { id: "white", name: "Glacier White", nameVi: "Trắng băng hà", hex: "#F5F5F5", image: "/images/byd-sealion7-white.jpg" },
      { id: "black", name: "Obsidian Black", nameVi: "Đen hắc diện", hex: "#0D0D0D", image: "/images/byd-sealion7-white.jpg" },
      { id: "blue", name: "Sapphire Blue", nameVi: "Xanh ngọc bích", hex: "#0F52BA", image: "/images/byd-sealion7-white.jpg" },
      { id: "green", name: "Emerald Green", nameVi: "Xanh ngọc lục bảo", hex: "#2E5D4B", image: "/images/byd-sealion7-white.jpg" },
    ],
  },
]

export default function BYDLandingPage() {
  const [activeVehicleId, setActiveVehicleId] = useState("atto3")
  const [selectedColor, setSelectedColor] = useState<CarColor | null>(null)

  const activeVehicle = vehiclesData.find((v) => v.id === activeVehicleId) || vehiclesData[2]

  // Reset color when vehicle changes
  useEffect(() => {
    setSelectedColor(activeVehicle.colors[0])
  }, [activeVehicleId, activeVehicle.colors])

  const handleVehicleChange = (vehicleId: string) => {
    setActiveVehicleId(vehicleId)
  }

  // Wait for color to be initialized
  if (!selectedColor) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="lg:mr-64">
        <HeroSection
          vehicle={activeVehicle}
          colors={activeVehicle.colors}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
      </div>

      <VehicleSidebar
        vehicles={vehiclesData}
        activeVehicle={activeVehicleId}
        onVehicleChange={handleVehicleChange}
      />

      <MobileVehicleNav
        vehicles={vehiclesData}
        activeVehicle={activeVehicleId}
        onVehicleChange={handleVehicleChange}
      />
    </main>
  )
}
