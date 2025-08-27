import React from "react";
import Image from "next/image";

// Import images correctly.
import bmi from "/images/bmi.jpg";
import bmr from "/images/bmr.jpg";
import car from "/images/car.jpg";

export default function App() {
  const calculators = [
    {
      title: "คำนวณ BMI",
      description: "คำนวณดัชนีมวลกายของคุณ",
      url: "bmi",
      icon: <Image src="/bmi.jpg" alt="BMI" className="w-16 h-16 rounded-full" width={200} height={200}/>,
    },
    {
      title: "คำนวณ BMR",
      description: "คำนวณอัตราการเผาผลาญพลังงานพื้นฐาน",
      url: "bmr",
      icon: <Image src="/bmr.jpg" alt="BMR" className="w-16 h-16 rounded-full"width={200} height={200} />,
    },
    {
      title: "คำนวณค่างวดรถ",
      description: "คำนวณค่างวดรถยนต์",
      url: "carinstallment", // ใช้ hyphen แทน space เพื่อความสอดคล้อง
      icon: (
        <Image
          src="/car.jpg"
          alt="Car Installment"
          className="w-16 h-16 rounded-full"
          width={200} height={200}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 font-kanit">
      <div className="w-full max-w-6xl p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            เครื่องคำนวณออนไลน์
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-8">
          {calculators.map((calculator, index) => (
            <a
              key={index}
              href={calculator.url}
              className="w-full max-w-sm rounded-3xl shadow-lg bg-gray-600 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6 flex flex-col items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-teal-500 rounded-full mb-4">
                  {calculator.icon}
                </div>
                <h2 className="text-2xl font-semibold text-teal-400 mb-2">
                  {calculator.title}
                </h2>
                <p className="text-gray-600">{calculator.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}