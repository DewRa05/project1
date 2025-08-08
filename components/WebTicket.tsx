"use client";

import { useState } from "react";

const WebTiketing = () => {
  const [tab, setTab] = useState(1);

  const tabs = [
    {
      label: "Pembayaran",
      image: "img/web/Asset 10 1.png",
      title: "Dukungan Pembayaran Lengkap",
      desc: "Sistem mendukung berbagai metode pembayaran, mulai dari transfer bank, e-wallet, hingga kartu kredit untuk memudahkan pelanggan Anda dalam bertransaksi.",
    },
    {
      label: "Tampilan responsif",
      image: "img/web/Asset 5 2.png",
      title: "Tampilan Responsif di Semua Perangkat",
      desc: "Website akan tampil optimal di semua perangkat, baik desktop, tablet, maupun smartphone, untuk memberikan pengalaman pengguna terbaik.",
    },
    {
      label: "Info Lokasi Outlet",
      image: "img/web/tracking 1.png",
      title: "Lacak Lokasi Outlet dengan Mudah",
      desc: "Pelanggan dapat menemukan lokasi outlet terdekat dengan fitur integrasi peta dan informasi lokasi secara real-time.",
    },
    {
      label: "Kemudahan Cek Pesanan",
      image: "img/web/Asset 10 1.png",
      title: "Pantau Pesanan Secara Real-Time",
      desc: "Pelanggan dapat memantau status pesanan mereka dengan mudah, dari proses pemesanan hingga pengiriman selesai.",
    },
    {
      label: "Kode OTP",
      image: "img/web/Asset 10 1.png",
      title: "Keamanan Login dengan OTP",
      desc: "Menjamin keamanan akun pengguna dengan sistem verifikasi dua langkah menggunakan Kode OTP yang dikirim ke perangkat terdaftar.",
    },
  ];

  const currentTab = tabs[tab - 1];

  return (
    <section
      id="4"
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
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 w-full max-w-6xl px-4">
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
