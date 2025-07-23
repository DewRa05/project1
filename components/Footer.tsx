import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white px-5 py-8 shadow-[0_-10px_10px_-5px_rgba(0,0,0,0.08)] mx-4 mt-20]">
      <div className="flex flex-wrap justify-between items-center gap-5">
        <div className="footer-logo">
          <a href="https://me-tech.id/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/footer/logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </a>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="#1" className="text-[#00C990] font-semibold hover:underline">
            Home
          </a>
          <a href="#2" className="text-[#00C990] font-semibold hover:underline">
            S1
          </a>
          <a href="#3" className="text-[#00C990] font-semibold hover:underline">
            S2
          </a>
          <a href="#7" className="text-[#00C990] font-semibold hover:underline">
            Contact
          </a>
        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div className="flex flex-wrap justify-between items-center mt-6 text-sm text-[#666] gap-4">
        <p>© 2025 Me-Tech. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://m.facebook.com/MilenialEliteTeknologi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/sosial/icons8-facebook-48 (1).png"
              alt="FB"
              width={20}
              height={20}
              className="opacity-80 hover:opacity-100 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/metech.id?igsh=cjI4dnVzcDAwcmlo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/sosial/icons8-instagram-24.png"
              alt="IG"
              width={20}
              height={20}
              className="opacity-80 hover:opacity-100 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/metechid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/sosial/icons8-linkedin-48 (1).png"
              alt="IN"
              width={20}
              height={20}
              className="opacity-80 hover:opacity-100 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
