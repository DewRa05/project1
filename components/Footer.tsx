import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="9" className="bg-white text-gray mt-20">
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        {/* Column 1 */}
        <div>
          <Image
            src="/img/footer/logo.png"
            alt="logo"
            width={120}
            height={45}
            className="object-contain"
            priority
          />
          <br></br>
          <p className="text-sm text-gray-600 mb-4">
            Me-Tech, solusi teknologi transportasi yang siap membantu Anda
            menjelajahi keunggulan sistem digital dengan mudah.
          </p>
        </div>

        {/* Column 2: Kontak */}
        <div>
          <h4 className="text-[#01B3BF] font-bold mb-2">Kontak</h4>
          <p className="text-sm text-gray-600 mb-1">
            Whatsapp: +62 878-2323-7339
          </p>
          <p className="text-sm text-gray-600 mb-1">Email: info@me-tech.id</p>
          <p className="text-sm text-gray-600">
            Jln. Kawaluyaan indah XXI no.8 Kota Bandung - Jawa Barat
          </p>
        </div>

        {/* Column 3: Sosial Media */}
        <div>
          <h4 className="text-[#01B3BF] font-bold mb-2">Sosial Media</h4>
          <div className="flex gap-4 text-xl mb-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BFCB]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BFCB]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BFCB]"
            >
              <FaFacebook />
            </a>
          </div>
          <p className="text-sm text-gray-600">
            Kami berkomitmen menjadikan setiap momen perjalanan Anda istimewa.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
        <p>© 2025 Me-Tech. All rights reserved.</p>
        <a href="#" className="hover:underline">
          F.A.Q
        </a>
        <a href="#" className="hover:underline">
          Kebijakan Privasi
        </a>
        <a href="#" className="hover:underline">
          Syarat & Ketentuan
        </a>
        <p className="mt-2 md:mt-0 md:ml-auto text-right">
          Powered by PT. Milenial Elite Teknologi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
