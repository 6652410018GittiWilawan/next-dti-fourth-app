"use client";

import React, { useState } from 'react';

// The main App component for the BMI Calculator.
// It uses React hooks to manage state and logic.
export default function App() {
  // State variables for weight, height, and the calculated BMI result.
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);

  // Function to handle the BMI calculation.
  const calculateBmi = () => {
    // Check if both weight and height have valid values.
    if (weight && height && weight > 0 && height > 0) {
      // Convert height from centimeters to meters.
      const heightInMeters = Number(height) / 100;
      // Calculate BMI using the formula: weight / (height * height).
      const calculatedBmi = Number(weight) / (heightInMeters * heightInMeters);
      // Update the BMI state with the result, formatted to 2 decimal places.
      setBmi(parseFloat(calculatedBmi.toFixed(2)));
    } else {
      // If input is invalid, reset the BMI result.
      setBmi(null);
    }
  };

  // Function to reset all input fields and the BMI result.
  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
  };
  
  return (
    // Main container for the entire application, centered on the screen with a dark, modern gradient background.
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900 text-gray-100">
      
      {/* Card Container with a modern, clean look */}
      <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center transform transition-transform duration-300 hover:scale-105 border border-gray-700">
        
        {/* BMI Calculator Heading */}
        <h1 className="text-4xl font-extrabold mb-2 text-white tracking-wide">BMI Calculator</h1>
        
        {/* "คำนวณ BMI" Text */}
        <p className="text-gray-400 mb-6 text-lg">คำนวณดัชนีมวลกาย</p>
        
        {/* BMI Icon (using a simple SVG for aesthetics) */}
        <div className="flex justify-center mb-6">
          <svg className="w-24 h-24 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H9a3 3 0 01-3-3V7a4 4 0 014-4h4a4 4 0 014 4v11a3 3 0 01-3 3z"></path>
          </svg>
        </div>
        
        {/* Input fields */}
        <div className="text-left">
          {/* Height Input */}
          <div className="mb-6">
            <label htmlFor="height" className="block text-sm font-medium text-gray-400">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-base transition-all text-gray-200"
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
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-base transition-all text-gray-200"
            />
          </div>
          
          
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <button
            onClick={calculateBmi}
            className="flex-1 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transform transition-all duration-200 ease-in-out hover:scale-105"
          >
            คำนวณ BMI
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
            ค่า BMI ที่คำนวณได้: 
          </p>
          <span id="bmi-result" className="text-4xl font-extrabold text-teal-400">
            {bmi !== null ? bmi.toFixed(2) : '0.00'}
          </span>
          <span className="text-xl font-normal ml-1 text-gray-400"></span>
        </div>
        
      </div>
    </div>
  );
}
