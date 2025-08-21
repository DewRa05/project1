import React from "react";
import Image from "next/image";

const OurClient = () => {
  const clientLogos = ["arnes1", "pasteur1", "Belibis", "tanis"];

  return (
    <section
      id="3"
      className="w-full bg-white flex flex-col justify-center items-center py-16 sm:py-20 md:py-24 lg:min-h-screen px-4"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="max-w-screen-lg w-full text-center">
        {/* Judul dan Deskripsi */}
        <div className="mb-12">
          {/* <p className="text-[#000] font-semibold uppercase text-sm mb-3 tracking-widest">
                KLIEN METECH
            </p> */}
          <h2 className="text-[#01B3BF] text-3xl md:text-5xl font-extrabold leading-snug mb-5">
            Mitra Terpercaya Kami
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Metech bangga menjadi mitra teknologi terpercaya bagi berbagai
            perusahaan dan organisasi. Kepercayaan ini memotivasi kami untuk
            terus menghadirkan solusi inovatif yang mendukung kesuksesan bisnis
            Anda.
          </p>
        </div>

        {/* Logo Klien */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white border border-gray-200 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 w-[180px] h-[120px]"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <Image
                src={`/img/ourclient/${logo}.png`}
                alt={`logo ${logo}`}
                width={128}
                height={128}
                sizes="(max-width: 768px) 6rem, 8rem"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClient;
