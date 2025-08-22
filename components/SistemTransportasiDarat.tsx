"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const SistemTransportasiDarat = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="2"
      className="relative flex h-screen items-center justify-center px-4 md:px-8 py-14 bg-white overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-6">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left p-8 space-y-4">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#01B3BF] leading-tight"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Sistem Transportasi <br className="hidden md:block" />
            Darat dan Laut Terdepan di Indonesia!
          </h2>
          <p
            className="text-[#000] text-lg sm:text-xl font-medium"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Solusi teknologi Me-Tech siap mendukung kelancaran bisnis Anda.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="flex-1 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="w-[300px] sm:w-[340px] md:w-[460px] lg:w-[500px] floating">
            <Image
              src="/img/intro/intro3.png"
              alt="Sistem Transportasi"
              width={800}
              height={600}
              className="w-full h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Floating Animation Style */}
      <style jsx>{`
        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default SistemTransportasiDarat;