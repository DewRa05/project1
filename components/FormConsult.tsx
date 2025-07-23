"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormConsult = () => {
  const [phone, setPhone] = useState("");

  return (
    <section
      id="7"
      className="flex flex-col min-h-screen lg:flex-row md:gap-x-10 gap-y-10 items-center justify-center bg-white px-4 sm:px-5 py-10 mx-2 sm:mx-4 pt-24"
    >
      {/* Kiri: Info box */}
      <div className="w-full lg:w-1/2 max-w-sm px-4 md:px-0 py-6 md:py-10">
        <div className="bg-[#18c3a4] text-white p-6 text-[16px] leading-relaxed text-center md:text-left shadow-md">
          Setiap operator transportasi darat akan mendapatkan Aplikasi Mobile
          (iOs & Android) serta website yang dibuat secara khusus sesuai brand
        </div>
      </div>

      {/* Kanan: Form */}
      <div className="w-full max-w-[500px] px-4">
        <h2 className="text-center text-[20px] md:text-[22px] font-semibold mb-2">
          Consult Now
        </h2>
        <p className="text-center text-[13px] text-[#555] mb-3 px-2">
          Fill out the form and our sales will contact you within 24 hours
        </p>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 text-sm border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-2 text-sm border border-gray-300 rounded w-full"
          />
          <PhoneInput
            country={"id"}
            value={phone}
            onChange={setPhone}
            enableSearch={true}
            placeholder="Phone Number"
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
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Company Name"
              className="flex-1 p-2 text-sm border border-gray-300 rounded"
            />
            <select className="flex-1 p-2 text-sm border border-gray-300 rounded">
              <option value="">Est Budget Marketing</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <select className="p-2 text-sm border border-gray-300 rounded">
            <option value="">Our Solution</option>
            <option value="ticketing">Ticketing System</option>
            <option value="logistic">Logistics</option>
          </select>
          <button
            type="submit"
            className="bg-[#00c990] hover:bg-[#08c177] text-white text-sm py-2 px-4 rounded transition duration-200"
          >
            Konsultasi Sekarang
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormConsult;
