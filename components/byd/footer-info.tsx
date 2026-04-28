"use client"

import { Receipt, Headphones, Calendar, Crown } from "lucide-react"

export function FooterInfo() {
  const infoItems = [
    {
      icon: Receipt,
      title: "Miễn phí sạc",
      description: "tại trạm BYD",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      description: "mọi lúc mọi nơi",
    },
    {
      icon: Calendar,
      title: "Đặt lịch độ dáng",
      description: "trên toàn quốc",
    },
    {
      icon: Crown,
      title: "Ưu đãi đặc quyền",
      description: "dành riêng cho bạn",
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-black to-black/50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {infoItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-electric-blue/50 hover:bg-electric-blue/5 lg:p-8"
              >
                <div className="mb-4 rounded-lg bg-electric-blue/10 p-3 transition-all duration-300 group-hover:bg-electric-blue/20">
                  <Icon className="h-6 w-6 text-electric-blue transition-all duration-300 group-hover:h-7 group-hover:w-7" />
                </div>
                <h3 className="text-center text-sm font-semibold text-white lg:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-center text-xs text-white/50 lg:text-sm">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
