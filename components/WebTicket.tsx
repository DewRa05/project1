"use client";

import { useState } from 'react';

const WebTiketing = () => {
  const [tab, setTab] = useState(1);

  const tabs = [
    {
      label: 'Support Multi Payment',
      image: 'img/web/Asset 10 1.png',
      title: 'Innovatice Technology Solution Technology Solution',
      desc: 'Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda',
    },
    {
      label: 'Responsive View',
      image: 'img/web/Asset 5 2.png',
      title: 'Responsive View',
      desc: 'Sistem kami bekerja optimal di desktop, tablet, dan perangkat mobile.',
    },
    {
      label: 'Info Lokasi Outlet',
      image: 'img/web/tracking 1.png',
      title: 'Info Lokasi Outlet',
      desc: 'Pengguna dapat dengan mudah melihat lokasi outlet melalui peta interaktif.',
    },
    {
      label: 'Kemudahan Cek Pesanan',
      image: 'img/web/Asset 10 1.png',
      title: 'Kemudahan Cek Pesanan',
      desc: 'Pengguna bisa melacak status pesanan dan tiket secara real-time.',
    },
    {
      label: 'Kode OTP',
      image: 'img/web/Asset 10 1.png',
      title: 'Kode OTP',
      desc: 'Sistem verifikasi dua langkah dengan kode OTP untuk keamanan akun.',
    },
  ];

  const currentTab = tabs[tab - 1];

  return (
    <section
      id="5"
      className="bg-white py-16 px-4 mx-4 lg:min-h-screen lg:justify-center lg:items-center md:overflow-hidden sm:overflow-x-hidden pt-24 scroll-mt-24"
    >
      {/* Judul */}
      <h2 className="text-center text-[#01B3BF] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold mb-8">
        Fitur Website Ticketing
      </h2>

      {/* Tabs */}
      <div className="flex justify-center overflow-x-auto scrollbar-hide px-2">
        <div className="flex gap-4 text-xs sm:text-sm font-semibold text-[#888] border-b pb-2 mb-10 min-w-max whitespace-nowrap">
          {tabs.map((item, index) => (
            <span
              key={index}
              onClick={() => setTab(index + 1)}
              className={`relative cursor-pointer px-2 ${
                tab === index + 1 ? 'text-[#00C990]' : 'hover:text-[#00C990]'
              }`}
            >
              {item.label}
              {tab === index + 1 && (
                <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-[#00C990]"></span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Konten */}
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-10 md:gap-12 max-w-6xl mx-auto px-4">
        {/* Gambar */}
        <div className="w-full md:w-1/2 flex justify-center overflow-hidden h-[220px] sm:h-[250px] md:h-[280px] lg:h-[250px] items-center">
          <img
            src={currentTab.image}
            alt={currentTab.title}
            className="max-h-full max-w-[280px] object-contain transition duration-300 ease-in-out"
          />
        </div>

        {/* Deskripsi */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-6">
          <h3 className="text-[#01B3BF] text-lg sm:text-xl font-bold mb-2 leading-relaxed">{currentTab.title}</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{currentTab.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default WebTiketing;
