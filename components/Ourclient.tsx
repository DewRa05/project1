
const OurClient = () => {
  const clientLogos = [
    "9kita",
    "Aeroticket",
    "Alba",
    "Azkia",
    "Belibis",
  ]; // ✅ Hanya 5 logo

  return (
    <section
      id="6"
      className="w-full bg-white flex flex-col justify-center items-center py-16 sm:py-20 md:py-24 lg:min-h-screen px-4"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="max-w-screen-lg w-full text-center">
        {/* Judul dan Deskripsi */}
        <div className="mb-12">
          <p className="text-[#000] font-semibold uppercase text-sm mb-3 tracking-widest">
            CLIENT METECH
          </p>
          <h2 className="text-[#01B3BF] text-3xl md:text-4xl font-extrabold leading-snug mb-5">
            Mitra Terpercaya Metech
          </h2>
          <p className="text-[#000] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Metech bangga menjadi mitra teknologi terpercaya bagi berbagai perusahaan 
            dan organisasi. Kepercayaan ini memotivasi kami untuk terus menghadirkan 
            solusi inovatif yang mendukung kesuksesan bisnis Anda.
          </p>
        </div>

        {/* Logo Klien */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white border border-gray-200 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer w-[130px] h-[90px]"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <img
                src={`/img/ourclient/${logo}.png`}
                alt={`logo ${logo}`}
                className="h-18 md:h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClient;
