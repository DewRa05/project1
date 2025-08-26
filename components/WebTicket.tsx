"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const WebTiketing = () => {
  const [tab, setTab] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: true,    // hanya animasi sekali (biar gak mandiri pas scroll balik)
      mirror: false, // jangan ulang animasi saat scroll ke atas
    });
    AOS.refresh();
  }, []);

  const tabs = [
    {
      label: "Website",
      image: "/img/web/Web.png",
      title: "Tampilan Website yang Modern dan Menarik",
      desc: "Sistem website memudahkan pengguna menjangkau informasi dan layanan transportasi.",
    },
    {
      label: "Mobile",
      image: "/img/web/Mobile.png",
      title: "Tampilan Mobile yang Responsif",
      desc: "Sistem mobile memudahkan pengguna menjangkau informasi dan layanan transportasi.",
    },
    {
      label: "E-KiosK Machine",
      image: "/img/web/KiosK.png",
      title: "Tampilan Responsif di Semua Perangkat",
      desc: "Website akan tampil optimal di semua perangkat, baik desktop, tablet, maupun smartphone, untuk memberikan pengalaman pengguna terbaik.",
    },
    {
      label: "Driver App",
      image: "/img/web/Driver App.png",
      title: "Lacak Lokasi Outlet dengan Mudah",
      desc: "Pelanggan dapat menemukan lokasi outlet terdekat dengan fitur integrasi peta dan informasi lokasi secara real-time.",
    },
    {
      label: "Actual Time of Arrival",
      image: "/img/web/Arrival.png",
      title: "Pantau Pesanan Secara Real-Time",
      desc: "Pelanggan dapat memantau status pesanan mereka dengan mudah, dari proses pemesanan hingga pengiriman selesai.",
    },
    {
      label: "E-Reporting",
      image: "/img/web/Report.png",
      title: "Pelaporan dari Sistem",
      desc: "Pengolahan pelaporan yang cepat dan akurat untuk meningkatkan kinerja dan kualitas layanan.",
    },
  ];

  const currentTab = tabs[tab - 1];

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  };

  return (
    <section
      id="4"
      className="bg-white min-h-screen flex flex-col justify-center items-center px-4 py-10"
      data-aos="fade-up"
    >
      <h2
        className="text-center text-[#01B3BF] text-3xl lg:text-5xl font-extrabold mb-6"
        data-aos="zoom-in"
      >
        Model Sistem
      </h2>

      {/* Tabs */}
      <div
        className="w-full max-w-4xl overflow-x-auto scrollbar-hide"
        data-aos="fade-up"
        data-aos-delay="200"
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
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 w-full max-w-6xl px-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Gambar dengan animasi */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-[220px] sm:h-[250px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="max-h-full max-w-[250px] sm:max-w-[280px] md:max-w-[320px]"
            >
              <Image
                src={currentTab.image}
                alt={currentTab.title}
                width={320}
                height={320}
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Deskripsi */}
        <div
          className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-6"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h3 className="text-[#01B3BF] text-3xl md:text-5xl font-extrabold mb-3 leading-relaxed">
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
