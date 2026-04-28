"use client"

import { Receipt, Headphones, Calendar, Crown } from "lucide-react"

export function FooterInfo() {
  const valueProps = [
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
    <section className="relative py-12 lg:py-16">
      {/* Glass bottom bar — value props */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="glass-card rounded-2xl px-6 py-8 lg:px-12 lg:py-10">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {valueProps.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className={`group flex flex-col items-center text-center transition-all duration-300 ${
                    index < valueProps.length - 1 ? "lg:border-r lg:border-stroke-light" : ""
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full glass transition-all duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5 text-accent-tech" />
                  </div>
                  <h3 className="text-sm font-semibold text-white lg:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary lg:text-sm">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

