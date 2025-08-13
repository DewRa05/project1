"use client";

import Image from "next/image";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <section
      id="1"
      className="relative h-screen w-full overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/hero/BG web trans.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-35"></div>
      <div
        className="relative z-20 text-white text-center flex flex-col items-center justify-start h-full gap-4 px-4 pt-80"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="mt-4">
          <Image
            src="/img/hero/logo.png"
            alt="Logo Transportasi"
            width={250}
            height={200}
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight mt-2">
          Sistem Transportasi Modern
        </h1>

        <p className="text-lg md:text-xl drop-shadow-md">
          Layanan Darat & Laut Terpercaya di Indonesia
        </p>
      </div>
    </section>
  );
};

export default Hero;
