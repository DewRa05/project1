"use client";

const OurClient = () => {
  const clientLogos = [
    "9kita", "Aeroticket", "Alba", "Azkia", "Belibis", "BPTJ", "BRI_1", "bridge syari_1", "Cari ustadz", "ddi_1",
    "Dunia Halal", "Faedah", "gomasgo", "Hot job", "HRD system", "KFC", "Kopkar", "Kosami", "MMBC", "My suzuki",
    "Nushinushi travel", "Nushinushi", "Pacific travel", "Palapa Mall", "pasteur", "Payment", "Pro umkm",
    "Puri yatim", "Rama Optik", "Real Travel", "RNI", "Spirit ebisnis", "Spirit tour", "Suzuki", "Syirkahmu",
    "Wakuliner", "Warung dekat", "YAKESNA"
  ];

  const allLogos = [...clientLogos, ...clientLogos]; // Duplikat agar marquee bisa looping

  return (
    <section id="6" className="w-full bg-[#E8FCFA] py-10 sm:py-14 md:py-16 px-4 p-8 pt-24 scroll-mt-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-[#01B3BF] text-xl sm:text-2xl md:text-3xl font-semibold uppercase">
            Our Clients
          </h2>
        </div>

        {/* Marquee */}
        <div className="marquee-container overflow-hidden relative">
          <div className="marquee-track flex animate-marquee gap-8">
            {allLogos.map((logo, index) => (
              <img
                key={index}
                src={`/img/ourclient/${logo}.png`}
                alt={`logo ${logo}`}
                className="h-12 sm:h-14 md:h-16 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
