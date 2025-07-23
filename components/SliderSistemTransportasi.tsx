"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/img/slider/laut.png", "/img/slider/car.png"];
const labels = ["Laut", "Darat"];

const SliderSistemTransportasi = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="3"
      className="py-16 px-4 bg-white min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Kiri: Gambar & Badge */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center justify-center">
          {/* Badge kotak */}
          <div className="absolute top-0 left-0 md:left-4 bg-[#16C7A0] text-white font-semibold px-4 py-3 text-[16px] max-w-[200px] shadow-md rounded-md">
            <div className="text-left leading-tight">
              Sistem <br />
              Transportasi <br />
              <div className="flex items-center mt-1">
                <span>{labels[current]}</span>
                <div className="h-[10px] w-[40px] bg-[#0070F3] ml-2"></div>
              </div>
            </div>
          </div>

          {/* Gambar Slider */}
          <div className="mt-16 w-[300px] md:w-[360px] lg:w-[420px] aspect-[4/3] overflow-hidden">
            <Image
              src={images[current]}
              alt="Slider"
              width={420}
              height={300}
              className="w-full h-full object-contain transition-all duration-500"
              priority
            />
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2.5 h-2.5 rounded-full inline-block transition duration-300 ${
                  index === current ? "bg-[#01B3BF]" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Kanan: Deskripsi */}
        <div className="w-full lg:w-1/2 bg-[#E8FCFA] px-8 py-10 rounded-md shadow-sm">
          <h3 className="text-[#01B3BF] mb-3 text-[20px] font-bold leading-snug text-left">
            <span className="font-bold text-[38px]">Me-Tech</span>
            <br />
            Online Ticketing System
          </h3>
          <p className="text-[#6B6B6B] text-[16px] leading-relaxed border-l-4 border-[#00b7d4] pl-3 text-left">
            Online Ticketing System adalah sistem untuk meningkatkan
            produktivitas perusahaan transportasi, memudahkan operasional, dan
            meningkatkan efisiensi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SliderSistemTransportasi;
