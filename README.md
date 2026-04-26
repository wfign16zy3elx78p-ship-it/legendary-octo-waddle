| Mục đích | File cần sửa |
|---|---|
| Thêm màu mới + đường dẫn ảnh | `app/page.tsx` |
| Thêm ảnh vật lý | `public/images/` |
| Chỉnh UI phần chọn màu | `components/byd/hero-section.tsx` |
| Thêm loại xe mới vào menu | `app/page.tsx` |
| Chỉnh giao diện menu desktop | `components/byd/vehicle-sidebar.tsx` |
| Chỉnh giao diện menu mobile | `components/byd/mobile-vehicle-nav.tsx` |


Để thêm loại xe mới vào menu, bạn chỉ cần sửa duy nhất file app/page.tsx. Cụ thể: thêm object xe mới vào mảng vehiclesData, ví dụ: { id: "tang", name: "Tang", year: "2025", price: "Từ 1.5 tỷ", priceFormatted: "1.500.000.000 đ", range: "650 km", colors: [ { id: "white", name: "Pearl White", nameVi: "Trắng ngọc trai", hex: "#F5F5F5", image: "/images/byd-tang-white.jpg" }, ], },
