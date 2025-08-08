import React from "react";

const OurClient = () => {
const clientLogos = [
"RNI",
"pasteur",
"Aeroticket",
"Azkia",
"Belibis",
"MMBC",
"Nushinushi",
"pacificTravel",
];

return (
<section id="3" className="w-full bg-white flex flex-col justify-center items-center py-16 sm:py-20 md:py-24 px-4"
    data-aos="fade-up" data-aos-delay="100">
    <div className="max-w-screen-lg w-full text-center">
         <h2 className="text-[#01B3BF] text-3xl md:text-5xl font-extrabold leading-snug mb-4">
                Mitra Terpercaya Metech
            </h2>
         {/* Judul dan Deskripsi */}
        <div className="mb-10">
           
            <p className="text-[#3f3d3d] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Metech bangga menjadi mitra teknologi terpercaya bagi berbagai perusahaan
                dan organisasi. Kepercayaan ini memotivasi kami untuk terus menghadirkan
                solusi inovatif yang mendukung kesuksesan bisnis Anda.
            </p>
        </div>

        {/* Logo Klien */}
        <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center w-full max-w-6xl mx-auto px-2">
            {clientLogos.map((logo, index) => (
            <div key={index}
                className="flex justify-center items-center bg-white border border-gray-200 p-2 sm:p-3 rounded-lg shadow hover:shadow-md transition-all duration-300 hover:scale-105 w-full h-[70px] sm:h-[80px]"
                data-aos="zoom-in" data-aos-delay={index * 100}>
                <img src={`/img/ourclient/${logo}.png`} alt={`Logo ${logo}`} loading="lazy"
                    className="h-full object-contain" />

            </div>
            ))}
        </div>


    </div>
</section>
);
};

export default OurClient;
