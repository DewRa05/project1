import Image from "next/image";

const SistemTransportasiDarat = () => {
    return (
        <section className="bg-white relative flex flex-col md:flex-row z-[1] lg:min-h-screen shadow-[0_10px_10px_-5px_rgba(0,0,0,0.08)] justify-center items-center text-center md:text-left p-10 mx-5" id="2">
            <div className="w-full p-8">
                <h1 className="text-[#01B3BF] font-bold lg:text-[38px] md:text-[28px] text-[28px]">Sistem Transportasi  <br className="hidden md:block" /> Darat Terdepan di Indonesia!</h1>
                <p className="text-[15px] lg:text-[20px] md:text-[15px] text-[#6B6B6B] mt-4">
                    Me-Tech hadir memberikan solusi teknologi yang  <br className="hidden md:block" /> inovatif untuk bisnis Anda. </p>
            </div>
            <div className="w-full flex justify-center items-center">
                <Image
                    src="/img/intro/intro.png"
                    alt="Sistem Transportasi Darat"
                    width={600}
                    height={400}
                    className="w-full max-w-[450px] sm:max-w-[400px] md:max-w-[700px] h-auto"
                />
            </div>
        </section>
    )
}; 

export default SistemTransportasiDarat;