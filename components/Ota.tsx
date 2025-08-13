"use client";

import Image from "next/image";

const features = [
  {
    title: "Traveloka",
    description:
      "Situs web agen perjalanan daring dengan berbagai moda transportasi maupun akomodasi.",
    icon: "/img/ota/1.png",
  },
  {
    title: "EasyBook",
    description:
      "Platform pemesanan kursi online untuk berbagai event dan transportasi.",
    icon: "/img/ota/Desain tanpa judul (24).png",
  },
  // {
  //   title: "Tiketix",
  //   description: "Layanan pemesanan tiket mudah untuk perjalanan dan hiburan.",
  //   icon: "/img/ota/2.png",
  // },
  {
    title: "RedBus",
    description:
      "Layanan pemesanan bus daring terbesar untuk rute lokal dan antar kota.",
    icon: "/img/ota/3.png",
  },
];

export default function OtaFeatures() {
  return (
    <section
      id="5"
      className="bg-white md:min-h-screen px-4 sm:px-6 md:px-8 py-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-5xl font-extrabold text-[#01B3BF] mb-3">
          Terhubung dengan OTA
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
          Pilih platform OTA terbaik untuk memenuhi kebutuhan perjalanan dan
          akomodasi Anda.
        </p>

        {/* Grid Fitur dengan AOS group */}
        <div
          className="grid md:grid-cols-3 justify-items-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center h-full grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={200}
                height={90}
                className="object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-[#000] mb-2 min-h-[28px]">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-md leading-snug min-h-[48px] max-w-[220px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
