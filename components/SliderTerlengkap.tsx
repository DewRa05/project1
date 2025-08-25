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
  { title: "Atur Jadwal", icon: "/img/sliderLengkap/atur jadwal.png", desc: "Satu seat untuk semua, tidak ada double booking." },
  { title: "Proses booking mudah", icon: "/img/sliderLengkap/booking mudah.png", desc: "Booking tiket jadi mudah dan cepat tanpa antre." },
  { title: "Harga tiket fleksibel", icon: "/img/sliderLengkap/tiket.png", desc: "Harga menyesuaikan kebutuhan dan waktu perjalanan." },
  { title: "Print tiket akurat", icon: "/img/sliderLengkap/print akurat.png", desc: "Cetak tiket langsung tanpa kesalahan dan cepat." },
  { title: "Teruji handal", icon: "/img/sliderLengkap/teruji.png", desc: "Sistem teruji dalam berbagai skenario transportasi." },
  { title: "Pembayaran", icon: "/img/sliderLengkap/payment.png", desc: "Pembayaran cepat dan aman." },
];
 
const SliderTerlengkap = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section
      id="6"
      className="bg-white min-h-screen py-16 px-4 flex flex-col items-center justify-center"
    >
      {/* Judul */}
      <h2 className="text-[#00BFCB] font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Sistem Transportasi Terlengkap
      </h2>
      <p className="text-gray-600 text-md sm:text-sm md:text-base mt-3 mb-8 max-w-lg px-2 text-center">
        Semua fitur untuk mempermudah perjalanan Anda dalam satu sistem.
      </p>

      {/* Grid Card */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-wc border border-gray-200 shadow-sm rounded-md p-5 flex flex-col items-start text-left hover:shadow-md transition w-[300px] sm:w-[340px]"
            >b

              <Image
                src={card.icon}
                alt={card.title}
                width={70}
                height={70}
                className="mb-3"
              />
              <h4 className="text-gray-800 font-semibold text-sm sm:text-base">{card.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-snug">
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
