import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="1"
      className="relative bg-[url('/img/hero/bg.png')] bg-cover bg-center min-h-screen flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto max-w-[1200px] text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <Image
            src="/img/hero/logo.png"
            alt="logo"
            width={220}
            height={110}
            className="object-contain drop-shadow-lg"
          />

          <h1
            className="text-white text-[24px] md:text-[44px] lg:text-[52px] font-extralight leading-tight"
            style={{ fontFamily: "Gadugi, Segoe UI, sans-serif" }}
          >
            Sistem Transportasi
          </h1>

          <p className="text-white text-[22px] md:text-[30px] lg:text-[36px] font-semibold leading-tight drop-shadow-sm">
            Darat & Laut Terdepan di Indonesia
          </p>

          <a
            href="#contact"
            className="mt-4 bg-white text-[#01B3BF] hover:bg-[#0198A8] hover:text-white transition duration-300 px-8 py-3 rounded-xl font-semibold shadow-md"
          >
            Consult Now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
