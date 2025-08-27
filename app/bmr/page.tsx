"use client";

import React, { useState } from 'react';

// The main App component for the BMR Calculator.
// It uses React hooks to manage state and logic.
export default function App() {
  // State variables for weight, height, age, gender, and the calculated BMR result.
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [bmr, setBmr] = useState<number | null>(null);

  // Function to handle the BMR calculation.
  const calculateBmr = () => {
    // Check if all input fields have valid values.
    if (weight && height && age && gender) {
      let calculatedBmr: number;
      // Use the Mifflin-St Jeor formula for BMR calculation.
      // Male: 10 * weight (kg) + 6.25 * height (cm) - 5 * age (y) + 5
      // Female: 10 * weight (kg) + 6.25 * height (cm) - 5 * age (y) - 161
      if (gender === 'male') {
        calculatedBmr = (10 * Number(weight)) + (6.25 * Number(height)) - (5 * Number(age)) + 5;
      } else {
        calculatedBmr = (10 * Number(weight)) + (6.25 * Number(height)) - (5 * Number(age)) - 161;
      }
      // Update the BMR state with the result, formatted to 2 decimal places.
      setBmr(parseFloat(calculatedBmr.toFixed(2)));
    } else {
      // If input is invalid, reset the BMR result.
      setBmr(null);
    }
  };

  // Function to reset all input fields and the BMR result.
  const resetFields = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('');
    setBmr(null);
  };
  
  return (
    // Main container for the entire application, centered on the screen with a dark, modern gradient background.
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900 text-gray-100">
      
      {/* Card Container with a modern, clean look */}
      <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center transform transition-transform duration-300 hover:scale-105 border border-gray-700">
        
        {/* BMR Calculator Heading */}
        <h1 className="text-4xl font-extrabold mb-2 text-white tracking-wide">BMR Calculator</h1>
        
        {/* "คำนวณ BMR" Text */}
        <p className="text-gray-400 mb-6 text-lg">คำนวณอัตราการเผาผลาญพลังงานขั้นพื้นฐาน</p>
        
        {/* BMR Icon (using a simple SVG for aesthetics) */}
        <div className="flex justify-center mb-6">
          <svg className="w-24 h-24 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        
        {/* Input fields */}
        <div className="text-left">
           {/* Height Input */}
          <div className="mb-4">
            <label htmlFor="height" className="block text-sm font-medium text-gray-400">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition-all text-gray-200"
            />
          </div>
          {/* Weight Input */}
          <div className="mb-4">
            <label htmlFor="weight" className="block text-sm font-medium text-gray-400">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition-all text-gray-200"
            />
          </div>
          
         
          
          {/* Age Input */}
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-400">ป้อนอายุ (ปี)</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition-all text-gray-200"
            />
          </div>

          {/* Gender Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400">เลือกเพศ</label>
            <div className="mt-1 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                  className="form-radio text-teal-500 h-5 w-5"
                />
                <span className="ml-2 text-gray-300 font-medium">ชาย</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                  className="form-radio text-pink-500 h-5 w-5"
                />
                <span className="ml-2 text-gray-300 font-medium">หญิง</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <button
            onClick={calculateBmr}
            className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transform transition-all duration-200 ease-in-out hover:scale-105"
          >
            คำนวณ BMR
          </button>
          <button
            onClick={resetFields}
            className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition-all duration-200 ease-in-out hover:scale-105"
          >
            รีเซ็ต
          </button>
        </div>
        {/* Home Button */}
        <div className="mt-4">
          <a href="/" 
            className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 ease-in-out hover:scale-105"
          >
            กลับหน้าหลัก
          </a>
        </div>
        

        {/* Result Display */}
        <div className="text-center mt-6 p-4 bg-gray-700 rounded-lg">
          <p className="text-xl font-bold text-gray-200">
            ค่า BMR ที่คำนวณได้:
          </p>
          <span id="bmr-result" className="text-4xl font-extrabold text-teal-400">
            {bmr !== null ? bmr.toFixed(2) : '0.00'}
          </span>
          <span className="text-xl font-normal ml-1 text-gray-400">Kcal/วัน</span>
        </div>
        
      </div>
      
    </div>
  );
}
