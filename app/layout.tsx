"use client";

import "./globals.css";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const sectionOrder = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

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
      setShowButton(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Observasi footer agar tombol tidak menutupi
    const footer = document.querySelector("footer");
    if (footer) {
      const observer = new IntersectionObserver(
        (entries) => setIsFooterVisible(entries[0].isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(footer);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    }

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
            className={`fixed right-6 w-12 h-12 flex items-center justify-center 
               bg-[#01B3BF]/90 backdrop-blur-md hover:bg-[#01B3BF] text-white text-2xl 
               rounded-full shadow-xl z-50 transition-all duration-300 
               hover:scale-110 opacity-90 hover:opacity-100
               ${isFooterVisible ? "bottom-24" : "bottom-6"}`}
            aria-label={isAtEnd ? "Scroll ke atas" : "Scroll ke bawah"}
          >
            {isAtEnd ? "↑" : "↓"}
          </button>
        )}
      </body>
    </html>
  );
}
