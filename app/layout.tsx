"use client";

import "./globals.css";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const sectionOrder = ["1", "2", "3", "4", "5", "6", "7"]; // mulai dari 1

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showButton, setShowButton] = useState(true); // tampil langsung dari awal

  useEffect(() => {
    AOS.init({ duration: 1000, once:true });

    const heroSection = document.getElementById("1");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "auto" });
    }
    
    const handleScroll = () => {
      let closestIndex = 0;
      let closestDistance = Infinity;

      sectionOrder.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCurrentSectionIndex(closestIndex);
      setShowButton(true); // tombol tetap muncul sepanjang waktu
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (currentSectionIndex < sectionOrder.length - 1) {
      const nextId = sectionOrder[currentSectionIndex + 1];
      const nextSection = document.getElementById(nextId);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const topSection = document.getElementById("1"); // kembali ke awal
      if (topSection) {
        topSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isAtEnd = currentSectionIndex === sectionOrder.length - 1;

  return (
    <html lang="en">
      <body className="scroll-smooth relative">
        <Navbar />
        {children}
        <Footer />

        {showButton && (
          <button
            onClick={handleScrollClick}
            className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center 
               bg-[#01B3BF] hover:bg-[#5fb9bf] text-white text-xl 
               rounded-full shadow-lg z-50 transition-all duration-300"
            aria-label={isAtEnd ? "Scroll ke atas" : "Scroll ke bawah"}
          >
            {isAtEnd ? "↑" : "↓"}
          </button>
        )}
      </body>
    </html>
  );
}
