import FormConsult from "@/components/FormConsult";
import Hero from "@/components/Hero";
import OurClient from "@/components/Ourclient";
import SistemTransportasiDarat from "@/components/SistemTransportasiDarat";
import SliderSistemTransportasi from "@/components/SliderSistemTransportasi";
import SliderTerlengkap from "@/components/SliderTerlengkap";
import WebTiketing from "@/components/WebTicket";
import InteractiveTechnology from "@/components/InteractiveTechnology";
import Ota from "@/components/Ota";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SistemTransportasiDarat />
      <OurClient />
      <WebTiketing />
      <Ota/>
      <SliderTerlengkap />
      <SliderSistemTransportasi />
      <InteractiveTechnology />
      <FormConsult />
    </main>
  );
}
