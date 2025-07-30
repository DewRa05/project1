"use client";

import { useEffect } from "react";

export default function InteractiveTechnology() {
  useEffect(() => {
    const frame = document.getElementById("secondFrame") as HTMLIFrameElement | null;

    const handleHover = (type: string, area: string) => {
      frame?.contentWindow?.postMessage({ type, area }, "*");
    };

    const items = document.querySelectorAll<HTMLLIElement>(".sidebar-item");
    items.forEach((item) => {
      item.addEventListener("mouseenter", () => handleHover("hover", item.dataset.area!));
      item.addEventListener("mouseleave", () => handleHover("leave", item.dataset.area!));
      item.addEventListener("click", () => handleHover("click", item.dataset.area!));
    });

    const handleMessage = (event: MessageEvent) => {
      if (!event.data?.type || !event.data?.area) return;

      const area = event.data.area;
      const sidebar = document.querySelector(`.sidebar-item[data-area="${area}"]`);
      if (!sidebar) return;

      if (event.data.type === "highlight") {
        sidebar.classList.add("active-sidebar");
      } else if (event.data.type === "unhighlight") {
        sidebar.classList.remove("active-sidebar");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const areaLabels = [
    "Reservasi Online Aplikasi / Web",
    "Reservasi Online Alfamart / Web",
    "Reservasi Online Indomaret / Web",
    "Reservasi Outlet Jakarta",
    "Reservasi Outlet Bandung",
    "Reservasi Outlet Surabaya",
    "Reservasi Outlet Yogyakarta",
    "Reservasi Outlet Medan",
    "Reservasi Outlet Bali",
    "Reservasi Outlet Makassar",
    "Reservasi Outlet Balikpapan",
    "Reservasi Outlet Batam",
    "Reservasi Outlet Malang",
    "Reservasi Outlet Palembang",
  ];

  return (
    <section id="5" className="bg-[#DBFFF7] py-12 px-4 sm:px-6 lg:px-10">
      <h2 className="text-center text-[#01B3BF] text-2xl sm:text-3xl lg:text-4xl mb-8 font-extrabold leading-snug" data-aos="fade-up" data-aos-delay="100">
        Innovative Technology Solution
      </h2>

      <div className="py-10 h-fit">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Iframe Section */}
          <section className="w-full lg:w-2/3" data-aos="fade-up" data-aos-delay="200">
            <div className="relative w-full h-[600px] sm:h-[350px] lg:h-[600px] overflow-hidden rounded-lg">
              <iframe
                id="secondFrame"
                src="/second.html"
                className="absolute inset-0 w-full h-full border-0"
                scrolling="no"
              ></iframe>
            </div>
          </section>

          {/* Sidebar */}
          <ul className="w-full sm:max-w-md lg:w-[280px] h-fit space-y-2 border border-gray-300 rounded-lg shadow-md bg-white p-2" data-aos="fade-up" data-aos-delay="300">
            {areaLabels.map((label, i) => (
              <li
                key={i}
                className="sidebar-item cursor-pointer px-3 py-2 rounded-md text-gray-700 font-medium text-sm hover:bg-[#effffb] hover:text-[#00c990] hover:border-l-4 hover:border-[#00b7d4] transition"
                data-area={i + 1}
                data-aos="fade-up"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        iframe::-webkit-scrollbar {
          display: none;
        }
        iframe {
          scrollbar-width: none;
        }
        .active-sidebar {
          background-color: #effffb;
          color: #00c990 !important;
          border-left: 4px solid #00c990;
        }
      `}</style>
    </section>
  );
}
