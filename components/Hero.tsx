"use client";

import Image from "next/image";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <section
      id="1"
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#01B3BF] to-[#108992] min-h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="relative z-20 text-white text-center flex flex-col items-center justify-center h-full gap-4 px-4">
        <div className="mb-4" data-aos="zoom" data-aos-delay="300">
          <Image
            src="/img/hero/logo.png"
            alt="Logo Transportasi"
            width={200}
            height={200}
            priority
          />
        </div>

        <h1
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          Sistem Transportasi
        </h1>

        <p
          className="text-lg md:text-xl drop-shadow-md"
          data-aos="fade-in"
          data-aos-delay="800"
        >
          Darat & Laut Terdepan di Indonesia
        </p>

        <a
          href="#6"
          className="mt-6 px-6 py-3 bg-white text-[#2F80ED] font-semibold rounded-full shadow-md hover:bg-[#eaedee] transition block w-fit"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          Tanya Sekarang!
        </a>
      </div>
    </section>
  );
};

export default Hero;
