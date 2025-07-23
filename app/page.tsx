import FormConsult from "@/components/FormConsult";
import Hero from "@/components/Hero";
import OurClient from "@/components/Ourclient";
import SistemTransportasiDarat from "@/components/SistemTransportasiDarat";
import SliderSistemTransportasi from "@/components/SliderSistemTransportasi";
import SliderTerlengkap from "@/components/SliderTerlengkap";
import WebTiketing from "@/components/WebTicket";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SistemTransportasiDarat />
      <SliderSistemTransportasi />
      <SliderTerlengkap />
      <section className="w-full lg:h-screen flex items-center justify-center">
        <div className="w-full h-1/2 bg-[#E8FCFA] flex items-center justify-center">
          <OurClient />
        </div>
      </section>
      <WebTiketing />
      <FormConsult />
    </main>
  );
}
