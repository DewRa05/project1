"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormConsult = () => {
  const [phone, setPhone] = useState("62");

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

  return (
    <section  id="8" className="min-h-screen bg-[#fff] flex items-center justify-center px-4 py-12">
      <div className="bg-b w-full max-w-5xl mx-auto rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
       
        {/* Right form */}
        <div className="md:w-3/4 p-8 sm:p-10 order-2 md:order-1">
          <h1 className="text-2xl font-bold text-[#01B3BF] text-center mb-3 font-size: 30px">
            Buat Persetujuan Dengan Kami!
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Kami siap membantu Anda 
            <br />
            menjelajahi keunggulan sistem digital dengan mudah.       
          </p>


          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#01B3BF]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#01B3BF]"
            />
            <PhoneInput
              country={"id"}
              value={phone}
              onChange={handlePhoneChange}
              enableSearch={true}
              placeholder="Nomor Telepon"
              inputProps={{ name: "phone", required: true }}
              containerStyle={{ width: "100%" }}
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
              }}
              onKeyDown={handlePhoneKeyDown}
            />
            <input
              type="text"
              placeholder="Nama Perusahaan"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#01B3BF]"
            />

            <textarea
              placeholder="Pesan atau kebutuhan Anda..."
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







// "use client";

// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const FormConsult = () => {
//   const [phone, setPhone] = useState("62"); // default prefix Indonesia

//   const handlePhoneChange = (value: string) => {
//     if (!value.startsWith("62")) {
//       setPhone("62"); // paksa balik ke 62
//     } else {
//       setPhone(value);
//     }
//   };

//   const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     // Jika user coba hapus kode negara (backspace di posisi awal)
//     if ((phone === "62" || phone.length <= 2) && e.key === "Backspace") {
//       e.preventDefault();
//     }
//   };

//   return (
//     <section
//       id="8"
//       className="flex flex-col lg:min-h-screen md:flex-row md:gap-x-10 gap-y-10 items-center justify-center bg-white px-4 sm:px-5 py-10 mx-2 sm:mx-4"
//       data-aos="fade-up"
//       data-aos-delay="100"
//     >
//       {/* Kiri: Info box */}
//       {/* <div
//         className="w-full lg:w-1/2 max-w-sm px-4 md:px-0 py-6 md:py-10"
//         data-aos="fade-right"
//         data-aos-delay="200"
//       >
//         <div className="bg-[#01B3BF] text-white p-6 text-[16px] leading-relaxed text-center md:text-left shadow-md">
//           Setiap operator transportasi darat akan mendapatkan Aplikasi Mobile
//           (iOs & Android) serta website yang dibuat secara khusus sesuai brand
//         </div>
//       </div> */}
//       <div>
//         <img
//           src="/img/form/consult.png"
//           alt="Form"
//           className="w-full max-w-[500px] h-auto"
//         />
//       </div>
//       {/* Kanan: Form */}
//       <div
//         className="w-full max-w-[500px] px-4"
//         data-aos="fade-left"
//         data-aos-delay="300"
//       >
//         <h2 className="text-center text-[20px] md:text-[22px] font-semibold mb-2">
//           Consult Now
//         </h2>
//         <p className="text-center text-[13px] text-[#555] mb-3 px-2">
//           Fill out the form and our sales will contact you within 24 hours
//         </p>
//         <form className="flex flex-col gap-3" data-aos="fade-up" data-aos-delay="400">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-2 text-sm border border-gray-300 rounded w-full"
//           />
//           <input
//             type="text"
//             placeholder="Email"
//             className="p-2 text-sm border border-gray-300 rounded w-full"
//           />
//           <PhoneInput
//             country={"id"}
//             value={phone}
//             onChange={handlePhoneChange}
//             enableSearch={true}
//             placeholder="Phone Number"
//             inputProps={{ name: "phone", required: true }}
//             containerStyle={{ width: "100%" }}
//             inputStyle={{
//               width: "100%",
//               height: "40px",
//               paddingLeft: "48px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               fontSize: "14px",
//             }}
//             buttonStyle={{
//               border: "1px solid #ccc",
//               borderTopLeftRadius: "5px",
//               borderBottomLeftRadius: "5px",
//             }}
//             onKeyDown={handlePhoneKeyDown} // <<< cegah hapus prefix
//           />
//           <div className="flex flex-col sm:flex-row gap-3">
//             <input
//               type="text"
//               placeholder="Company Name"
//               className="flex-1 p-2 text-sm border border-gray-300 rounded"
//             />
//             {/* <select className="flex-1 p-2 text-sm border border-gray-300 rounded">
//               <option value="">Est Budget Marketing</option>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </select> */}
//           </div>
//           {/* <select className="p-2 text-sm border border-gray-300 rounded">
//             <option value="">Our Solution</option>
//             <option value="ticketing">Ticketing System</option>
//             <option value="logistic">Logistics</option>
//           </select> */}
//           <button
//             type="submit"
//             className="bg-[#01B3BF] hover:bg-[#01B3BF] text-white text-sm py-2 px-4 rounded transition duration-200"
//           >
//             Konsultasi Sekarang
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default FormConsult;