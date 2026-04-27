"use client"

import { useState } from "react"
import { X, Settings, Armchair, Car } from "lucide-react"

interface VehicleInfoTabsProps {
  isOpen: boolean
  onClose: () => void
  vehicleName: string
}

const tabs = [
  { id: "specs", label: "Thông số kỹ thuật", icon: Settings },
  { id: "interior", label: "Thiết kế nội thất", icon: Armchair },
  { id: "exterior", label: "Thiết kế ngoại thất", icon: Car },
]

export function VehicleInfoTabs({ isOpen, onClose, vehicleName }: VehicleInfoTabsProps) {
  const [activeTab, setActiveTab] = useState("specs")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">
            {vehicleName} - Thông tin chi tiết
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-electric-blue border-b-2 border-electric-blue bg-electric-blue/5"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="p-6 min-h-[300px]">
          {activeTab === "specs" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Thông số kỹ thuật</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Kích thước tổng thể", value: "4.800 x 1.875 x 1.460 mm" },
                  { label: "Chiều dài cơ sở", value: "2.920 mm" },
                  { label: "Trọng lượng", value: "2.150 kg" },
                  { label: "Dung tích pin", value: "82.5 kWh" },
                  { label: "Công suất tối đa", value: "390 kW (530 PS)" },
                  { label: "Mô-men xoắn", value: "670 Nm" },
                  { label: "Tăng tốc 0-100 km/h", value: "3.8 giây" },
                  { label: "Tốc độ tối đa", value: "230 km/h" },
                ].map((spec, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-sm text-white/60">{spec.label}</span>
                    <span className="text-sm font-medium text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "interior" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Thiết kế nội thất</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Màn hình trung tâm", value: "15.6 inch xoay" },
                  { label: "Màn hình táp-lô", value: "10.25 inch" },
                  { label: "Hệ thống âm thanh", value: "Dynaudio 12 loa" },
                  { label: "Ghế ngồi", value: "Da Nappa chỉnh điện 14 hướng" },
                  { label: "Cửa sổ trời", value: "Panorama toàn cảnh" },
                  { label: "Điều hòa", value: "4 vùng độc lập" },
                  { label: "Sạc không dây", value: "2 vị trí 50W" },
                  { label: "Ambient Light", value: "64 màu tùy chỉnh" },
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-sm text-white/60">{feature.label}</span>
                    <span className="text-sm font-medium text-white">{feature.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "exterior" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Thiết kế ngoại thất</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Đèn pha", value: "LED Matrix thông minh" },
                  { label: "Đèn hậu", value: "LED liền mạch" },
                  { label: "Mâm xe", value: "19 inch phay đa chấu" },
                  { label: "Cửa hít", value: "4 cửa tự động" },
                  { label: "Cốp điện", value: "Mở điện + đá chân" },
                  { label: "Gương chiếu hậu", value: "Chỉnh điện, gập điện, sấy" },
                  { label: "Kính cửa", value: "Cách âm 2 lớp" },
                  { label: "Nắp capô", value: "Mở điện thông minh" },
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-sm text-white/60">{feature.label}</span>
                    <span className="text-sm font-medium text-white">{feature.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

