"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormConsult = () => {
  const [phone, setPhone] = useState("62");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePhoneChange = (value: string) => {
    if (!value.startsWith("62")) {
      setPhone("62");
    } else {
      setPhone(value);
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((phone === "62" || phone.length <= 2) && e.key === "Backspace") {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waNumber = "6283148217491";
    const waMessage = `Halo Me-Tech,%0A
          Nama: ${name}%0A
          Email: ${email}%0A
          Telepon: ${phone}%0A
          Perusahaan: ${company}%0A
          Pesan: ${message}`;

    const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section
      id="8"
      className="min-h-screen bg-[#fff] flex items-center justify-center px-4 py-12"
    >
      <div
        className="bg-b w-full max-w-5xl mx-auto rounded-xl overflow-hidden flex flex-col md:flex-row"
        data-aos="fade-up"
      >
        {/* Right form */}
        <div className="md:w-3/4 p-8 sm:p-10 order-2 md:order-1">
          <h1 className="text-4xl font-extrabold text-[#01B3BF] text-center mb-3">
            Buat Persetujuan Dengan Kami!
          </h1>
          <p className="text-lg text-gray-500 text-center mb-6">
            Kami siap membantu Anda <br /> menjelajahi keunggulan sistem digital
            dengan mudah.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#01B3BF]"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#01B3BF]"
            />
            <div style={{ position: "relative", zIndex: 50 }}>
              <PhoneInput
                country={"id"}
                value={phone}
                onChange={handlePhoneChange}
                enableSearch={true}
                placeholder="Nomor Telepon"
                inputProps={{ name: "phone", required: true }}
                containerStyle={{
                  width: "100%",
                }}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  paddingLeft: "48px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
                buttonStyle={{
                  border: "1px solid #ccc",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  backgroundColor: "white",
                }}
                onKeyDown={handlePhoneKeyDown}
              />
            </div>

            <input
              type="text"
              placeholder="Nama Perusahaan"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#01B3BF]"
            />

            <textarea
              placeholder="Pesan atau kebutuhan Anda..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#01B3BF] resize-none"
              rows={4}
            />

            <p className="text-sm text-gray-500 text-center mb-6">
              Kami akan menghubungi Anda dalam waktu 24 jam
            </p>
            <button
              type="submit"
              className="w-full bg-[#01B3BF] text-white py-2 rounded-md text-sm font-medium hover:bg-[#0198a8] transition"
            >
              Konsultasi Sekarang
            </button>
          </form>
        </div>

        {/* Left illustration */}
        <div className="md:w-1/2 bg-[#fff] order-1 flex items-center justify-center p-0 md:order-2">
          <img
            src="/img/contact/60316.jpg"
            alt="Consult illustration"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FormConsult;
