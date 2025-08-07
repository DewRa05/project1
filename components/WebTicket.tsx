"use client";

import { useState } from "react";

const WebTiketing = () => {
  const [tab, setTab] = useState(1);

  const tabs = [
    {
      label: "Support Multi Payment",
      image: "img/web/Asset 10 1.png",
      title: "Innovative Technology Solution",
      desc: "Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda",
    },
    {
      label: "Responsive View",
      image: "img/web/Asset 5 2.png",
      title: "Responsive View",
      desc: "Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda",
    },
    {
      label: "Info Lokasi Outlet",
      image: "img/web/tracking 1.png",
      title: "Info Lokasi Outlet",
      desc: "Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda",
    },
    {
      label: "Kemudahan Cek Pesanan",
      image: "img/web/Asset 10 1.png",
      title: "Kemudahan Cek Pesanan",
      desc: "Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda",
    },
    {
      label: "Kode OTP",
      image: "img/web/Asset 10 1.png",
      title: "Kode OTP",
      desc: "Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda. Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda",
    },
  ];

  const currentTab = tabs[tab - 1];

  return (
    <section
      id="7"
      className="bg-white min-h-screen flex flex-col justify-center items-center px-4 py-10"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Judul */}
      <h2
        className="text-center text-[#01B3BF] text-3xl lg:text-5xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8"
        data-aos="fade-down"
      >
        Fitur Website Ticketing
      </h2>

      {/* Tabs */}
      <div
        className="w-full max-w-4xl overflow-x-auto scrollbar-hide"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex justify-start sm:justify-center gap-6 text-sm sm:text-base font-semibold text-[#888] border-b pb-2 mb-8 min-w-max whitespace-nowrap px-2">
          {tabs.map((item, index) => (
            <span
              key={index}
              onClick={() => setTab(index + 1)}
              className={`relative cursor-pointer px-2 ${
                tab === index + 1 ? "text-[#01B3BF]" : "hover:text-[#01B3BF]"
              }`}
            >
              {item.label}
              {tab === index + 1 && (
                <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-[#01B3BF]"></span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Konten */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-6xl px-4">
        {/* Gambar */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center h-[220px] sm:h-[250px] md:h-[300px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src={currentTab.image}
            alt={currentTab.title}
            className="max-h-full max-w-[250px] sm:max-w-[280px] md:max-w-[320px] object-contain transition duration-300 ease-in-out"
          />
        </div>

        {/* Deskripsi */}
        <div
          className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-6"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3 className="text-[#01B3BF] text-md text-4xl md:text-4xl font-extrabold mb-3 leading-relaxed">
            {currentTab.title}
          </h3>
          <p className="text-md sm:text-base text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
            {currentTab.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebTiketing;
