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
        <div className="mt-25">
          <Image
            src="/img/hero/logo.png"
            alt="Logo Transportasi"
            width={250}
            height={200}
            priority
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-tight mt-2">
          Sistem Transportasi Modern
        </h1>

        <p className="text-lg md:text-xl drop-shadow-md">
          Layanan Tranportasi Darat & Laut Terpercaya di Indonesia
        </p>
      </div>
    </section>
  );
};

export default Hero; 
// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const HeroTransportasi = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative flex h-screen items-center justify-center px-4 md:px-8 py-14 bg-[#3fbebc] overflow-hidden"
//     >
//       <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
//         {/* Gambar kiri */}
//         <div
//           className="flex-1 flex justify-center lg:justify-start"
//           data-aos="fade-right"
//           data-aos-delay="100"
//         >
//           <div className="w-[300px] sm:w-[340px] md:w-[460px] lg:w-[500px] floating">
//             <Image
//               src="/img/intro/intro.png" // ganti sesuai gambar
//               alt="Ilustrasi Transportasi"
//               width={800}
//               height={600}
//               className="w-full h-auto object-contain drop-shadow-xl"
//               priority
//             />
//           </div>
//         </div>

//         {/* Konten kanan dengan logo */}
//         <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-white gap-4">
//           {/* Logo tetap muncul */}
//           <Image
//             src="/img/hero/logo.png"
//             alt="Logo Transportasi"
//             width={250}
//             height={200}
//             priority
//           />

//           {/* Judul */}
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight"
//             data-aos="fade-left"
//             data-aos-delay="300"
//           >
//             Sistem Transportasi Modern
//           </h1>

//           {/* Deskripsi */}
//           <p
//             className="text-md sm:text-lg md:text-xl drop-shadow-md"
//             data-aos="fade-left"
//             data-aos-delay="500"
//           >
//             Layanan Darat & Laut Terpercaya di Indonesia
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroTransportasi;
