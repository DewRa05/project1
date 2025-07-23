"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CardItem = {
  title: string;
  img: string;
  icon: string;
  desc: string;
};

const cards: CardItem[] = [
  {
    title: "Atur Jadwal",
    icon: "/img/sliderLengkap/Asset 46.png",
    img: "/img/sliderLengkap/1.png",
    desc: "Satu seat untuk semua, tidak ada double booking.",
  },
  {
    title: "Proses booking mudah",
    icon: "/img/sliderLengkap/icon test.png",
    img: "/img/sliderLengkap/2.png",
    desc: "Booking tiket jadi mudah dan cepat tanpa antre.",
  },
  {
    title: "Terhubung dengan Online Travel Agen",
    icon: "/img/sliderLengkap/Icon test3_3.png",
    img: "/img/sliderLengkap/3.png",
    desc: "Integrasi langsung dengan berbagai OTA terpercaya.",
  },
  {
    title: "Harga tiket fleksibel",
    icon: "/img/sliderLengkap/Icon test2.png",
    img: "/img/sliderLengkap/4.png",
    desc: "Harga menyesuaikan kebutuhan dan waktu perjalanan.",
  },
  {
    title: "Print tiket mudah & akurat",
    icon: "/img/sliderLengkap/Asset 25.png",
    img: "/img/sliderLengkap/5.png",
    desc: "Cetak tiket langsung tanpa kesalahan dan cepat.",
  },
  {
    title: "Teruji handal transportasi",
    icon: "/img/sliderLengkap/Asset 26.png",
    img: "/img/sliderLengkap/6.png",
    desc: "Sistem telah teruji dalam berbagai skenario transportasi.",
  },
];

const SliderTerlengkap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    const card = container?.children[index] as HTMLElement | undefined;
    if (container && card) {
      const cardLeft = card.offsetLeft;
      const containerWidth = container.clientWidth;
      const cardWidth = card.offsetWidth;

      container.scrollTo({
        left: cardLeft - containerWidth / 2 + cardWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    scrollToCard(index);
  };

  const handleScrollButton = (dir: number) => {
    let newIndex = activeIndex + dir;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= cards.length) newIndex = cards.length - 1;
    handleCardClick(newIndex);
  };

  useEffect(() => {
    scrollToCard(activeIndex);
  }, []);

  return (
    <section
      id="4"
      className="bg-white pt-20 pb-20 p-8 min-h-screen md:-min-h-screen overflow-hidden relative flex flex-col items-center scroll-mt-24"
    >
      {/* Judul */}
      <div className="w-full flex justify-center items-center mb-5">
        <h2 className="text-[#01B3BF] font-bold text-[35px] md:text-[42px] text-center px-4">
          Sistem Transportasi Terlengkap
        </h2>
      </div>

      {/* Konten */}
      <div className="mx-5 flex flex-col md:flex-row items-center justify-between gap-0 w-full max-w-7xl">
        {/* Kolom Kiri */}
        <div className="flex flex-col justify-center items-center text-center px-4 sm:px-8 md:w-[500px]">
          <p className="transition-all duration-300 ease-in-out text-[#01B3BF] text-[20px] font-bold mb-6 text-center sm:text-center md:text-left min-h-[64px]">
            {cards[activeIndex].desc}
          </p>

          <div className="h-48 min-h-[192px] flex items-center justify-center mb-4">
            <Image
              src={cards[activeIndex].img}
              alt={cards[activeIndex].title}
              width={400}
              height={400}
              className="transition-all duration-500 ease-in-out max-h-full object-contain animate-[softbounce_2.5s_ease-in-out_infinite]"
            />
          </div>

          {/* Tombol Scroll */}
          <div className="flex gap-12 justify-center mt-4 leading-relaxed">
            <button
              onClick={() => handleScrollButton(-1)}
              className="w-10 h-10 rounded-full border-2 border-[#16C7A0] text-[#16C7A0] bg-white flex items-center justify-center shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => handleScrollButton(1)}
              className="bg-[#16C7A0] w-10 h-10 rounded-full flex items-center justify-center text-white shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative md:w-1/2 leading-relaxed">
          {/* Background hijau */}
          <div className="bg-[#16C7A0] h-[160px] w-full absolute top-0 left-0 right-0 z-0 ml-2 mt-8 overflow-hidden" />

          {/* Cards */}
          <div
            ref={containerRef}
            className="relative mt-[60px] z-10 flex gap-6 overflow-x-hidden scroll-smooth pb-4 pr-4 pl-4 pointer-events-auto ml-5"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`bg-white w-[150px] h-[200px] flex-shrink-0 flex flex-col items-center justify-center text-center px-3 py-4 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-md hover:scale-[1.01] cursor-pointer ${
                  activeIndex === index ? "scale-110 shadow-lg z-10" : ""
                }`}
              >
                {/* Gambar */}
                <div className="flex items-center justify-center h-[48px] w-[48px] mb-2">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={48}
                    height={48}
                    className="object-contain w-[48px] h-[48px] drop-shadow"
                  />
                </div>

                {/* Judul */}
                <h4 className="text-gray-600 font-semibold text-sm leading-snug text-center">
                  {card.title}
                </h4>
              </div>
            ))}
          </div>

          <p className="text-[18px] font-normal text-gray-600 mt-6 px-4">
            Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis
            Anda Me-Tech hadir memberikan solusi teknologi yang inovatif untuk
            bisnis Anda
          </p>
        </div>
      </div>
    </section>
  );
};

export default SliderTerlengkap;
