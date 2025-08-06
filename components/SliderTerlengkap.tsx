"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

type CardItem = {
  title: string;
  icon: string;
  desc: string;
};

const cards: CardItem[] = [
  { title: "Atur Jadwal", icon: "/img/sliderLengkap/1.png", desc: "Satu seat untuk semua, tidak ada double booking." },
  { title: "Proses booking mudah", icon: "/img/sliderLengkap/2.png", desc: "Booking tiket jadi mudah dan cepat tanpa antre." },
  { title: "Terhubung dengan OTA", icon: "/img/sliderLengkap/3.png", desc: "Integrasi langsung dengan berbagai OTA terpercaya." },
  { title: "Harga tiket fleksibel", icon: "/img/sliderLengkap/4.png", desc: "Harga menyesuaikan kebutuhan dan waktu perjalanan." },
  { title: "Print tiket akurat", icon: "/img/sliderLengkap/5.png", desc: "Cetak tiket langsung tanpa kesalahan dan cepat." },
  { title: "Teruji handal", icon: "/img/sliderLengkap/6.png", desc: "Sistem teruji dalam berbagai skenario transportasi." },
];

const SliderTerlengkap = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section
      id="4"
      className="bg-white min-h-screen py-16 px-4 flex flex-col items-center text-center justify-center"
    >
      {/* Judul */}
      <h2 className="text-[#00BFCB] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Sistem Transportasi Terlengkap
      </h2>
      <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 mb-8 max-w-lg px-2">
        Semua fitur untuk mempermudah perjalanan Anda dalam satu sistem.
      </p>

      {/* Grid Card Center */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200 shadow-sm p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-md transition w-[140px] sm:w-44"
            >
              <Image src={card.icon} alt={card.title} width={60} height={60} className="sm:w-[70px] sm:h-[70px]" />
              <h4 className="text-gray-800 font-semibold text-xs sm:text-sm mt-3">{card.title}</h4>
              <p className="text-gray-600 text-[10px] sm:text-xs mt-2 leading-snug px-1 sm:px-2">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderTerlengkap;
