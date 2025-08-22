"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

const images = ["/img/slider/laut.png", "/img/slider/car.png"];
const labels = ["Laut", "Darat"];

// Konten dinamis sesuai slide
const descriptions = [
  {
    title: "Sistem Tiket Laut",
    text: "Sistem tiket untuk transportasi laut, memudahkan pemesanan kapal dan manajemen penumpang.",
  },
  {
    title: "Sistem Tiket Darat",
    text: "Sistem tiket untuk transportasi darat, mempermudah pemesanan bus, travel, dan pengelolaan perjalanan.",
  },
];

const SliderSistemTransportasi = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="7"
      className="py-16 px-4 md:px-10 bg-white min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Kiri: Gambar & Badge */}
        <div
          className="relative w-full md:w-1/2 flex flex-col items-center"
          data-aos="fade-right"
        >
          {/* Badge */}
          <div
            className="absolute top-2 left-2 md:top-0 md:left-4 bg-[#16C7A0] text-white font-semibold px-5 py-3 text-sm md:text-base rounded-md shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="leading-tight">
              Sistem <br />
              Transportasi <br />
              <div className="flex items-center mt-1">
                <span className="capitalize">{labels[current]}</span>
                <div className="h-[10px] w-[40px] bg-[#0070F3] ml-2 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Gambar Slider */}
          <div
            className="mt-20 w-[300px] sm:w-[360px] md:w-[400px] lg:w-[450px] aspect-[4/3] overflow-hidden transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Image
              src={images[current]}
              alt={`Gambar ${labels[current]}`}
              width={450}
              height={300}
              className="w-full h-full object-contain transition duration-500 ease-in-out"
              priority
            />
          </div>

          {/* Dots */}
          <div
            className="flex justify-center mt-5 gap-2"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === current ? "bg-[#01B3BF]" : "bg-gray-300"
                } transition duration-300`}
              ></span>
            ))}
          </div>
        </div>

        {/* Kanan: Deskripsi */}
        <div
          className="w-full md:w-1/2 bg-[#E8FCFA] p-8 rounded-xl shadow-md text-left"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <h3 className="text-[#01B3BF] text-2xl md:text-3xl font-bold mb-4">
            <span
              className="text-[32px] md:text-[38px] font-extrabold block text-[#01B3BF]"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              {descriptions[current].title}
            </span>
            Sistem Tiket 
          </h3>
          <p
            className="text-[#6B6B6B] text-base md:text-lg leading-relaxed border-l-4 border-[#00b7d4] pl-4"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            {descriptions[current].text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SliderSistemTransportasi;
