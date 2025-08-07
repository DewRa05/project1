"use client";

import Image from "next/image";
import "aos/dist/aos.css";

const SistemTransportasiDarat = () => {
  return (
    <section
      id="2"
      className="relative flex h-screen items-center justify-center px-4 md:px-8 py-14 bg-white overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-6">
        <div
          className="flex-1 text-center lg:text-left p-8 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01B3BF] leading-tight" data-aos="fade-left" data-aos-delay="100">
            Sistem Transportasi <br className="hidden md:block"/>Darat dan Laut Terdepan di Indonesia!
          </h2>
          <p className="text-[#000] text-lg sm:text-xl font-medium" data-aos="fade-left" data-aos-delay="300">
            Solusi teknologi Me-Tech siap mendukung kelancaran bisnis Anda.
          </p>
        </div>

        <div
          className="flex-1 flex justify-center" data-aos="fade-up" data-aos-delay="500">
          <div className="w-[300px] sm:w-[340px] md:w-[460px] lg:w-[500px]">
            <Image
              src="/img/intro/intro.png"
              alt="Sistem Transportasi"
              width={800}
              height={600}
              className="w-full h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SistemTransportasiDarat;
