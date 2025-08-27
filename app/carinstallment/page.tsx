"use client";

import Link from 'next/link';
import React, { useState } from 'react';

// The main App component for the Car Installment Calculator.
// It uses React hooks to manage state and logic.
export default function App() {
  // State variables for car price, down payment percentage, loan term, interest rate, and the calculated monthly installment.
  const [userName, setUserName] = useState<string>('');
  const [carPrice, setCarPrice] = useState<number | ''>('');
  const [downPaymentPercentage, setDownPaymentPercentage] = useState<number>(15); // Default to 15%
  const [loanTerm, setLoanTerm] = useState<number>(1); // Default to 1 month
  const [interestRate, setInterestRate] = useState<number | ''>('');
  const [monthlyInstallment, setMonthlyInstallment] = useState<number | null>(null);

  // Function to handle the installment calculation.
  const calculateInstallment = () => {
    // Check if all required input fields have valid values.
    if (carPrice && interestRate) {
      const downPaymentAmount = Number(carPrice) * (downPaymentPercentage / 100);
      const loanAmount = Number(carPrice) - downPaymentAmount;
      
      // Convert annual interest rate to monthly rate
      const monthlyInterestRate = Number(interestRate) / 100 / 12;
      
      let calculatedInstallment;
      
      // Check if monthly interest rate is greater than 0
      if (monthlyInterestRate > 0) {
        // Amortization formula for a more accurate calculation
        calculatedInstallment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
      } else {
        // Simple calculation for 0% interest rate
        calculatedInstallment = loanAmount / loanTerm;
      }

      // Update the monthly installment state with the result, formatted to 2 decimal places.
      setMonthlyInstallment(parseFloat(calculatedInstallment.toFixed(2)));
    } else {
      // If input is invalid, reset the monthly installment result.
      setMonthlyInstallment(null);
    }
  };

  // Function to reset all input fields and the result.
  const resetFields = () => {
    setUserName('');
    setCarPrice('');
    setInterestRate('');
    setDownPaymentPercentage(15);
    setLoanTerm(1);
    setMonthlyInstallment(null);
  };

  // Define the fixed loan term options
  const loanTerms = [
    { value: 12, label: '12 งวด (1 ปี)' },
    { value: 24, label: '24 งวด (2 ปี)' },
    { value: 36, label: '36 งวด (3 ปี)' },
    { value: 48, label: '48 งวด (4 ปี)' },
    { value: 60, label: '60 งวด (5 ปี)' },
    { value: 72, label: '72 งวด (6 ปี)' },
  ];

  return (
    // Main container for the entire application with a dark theme background.
    <div className="bg-gray-950 flex items-center justify-center min-h-screen p-4 font-sans">
      
      {/* Card Container with a modern, dark theme. */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full text-center border border-gray-700">
        
        {/* Calculator Heading with light text. */}
        <h1 className="text-3xl font-extrabold mb-2 text-gray-50">เครื่องคำนวณค่างวดรถยนต์</h1>
        
        {/* Subheading with light gray text. */}
        <p className="text-gray-400 mb-6 text-lg">คำนวณค่างวดรถยนต์</p>
        
        {/* Car Icon Placeholder */}
        <div className="flex justify-center mb-6">
          <svg className="w-24 h-24 text-teal-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.92 6.01C18.72 5.43 18.16 5 17.5 5H6.5c-.66 0-1.22.43-1.42 1.01L3 12v8h2v-2h14v2h2v-8l-2.08-5.99zM6.5 7h11l1.19 3.59H5.31L6.5 7zM19 18H5v-4h14v4z"></path><circle cx="7.5" cy="16" r="1.5"></circle><circle cx="16.5" cy="16" r="1.5"></circle>
          </svg>
        </div>
        
        {/* Input fields container. */}
        <div className="text-left">
          {/* User Name Input */}
          <div className="mb-4">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-300">ชื่อผู้คำนวณ</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-50 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            />
          </div>
          {/* Car Price Input */}
          <div className="mb-4">
            <label htmlFor="carPrice" className="block text-sm font-medium text-gray-300">ราคารถ (บาท)</label>
            <input
              type="number"
              id="carPrice"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-50 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            />
          </div>
          {/* Interest Rate Input */}
          <div className="mb-6">
            <label htmlFor="interestRate" className="block text-sm font-medium text-gray-300">อัตราดอกเบี้ย (% ต่อปี)</label>
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-50 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            />
          </div>
          
          {/* Down Payment Percentage */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">เงินดาวน์ (%)</label>
            <div className="flex flex-wrap gap-2">
              {[15, 20, 30, 35].map(percent => (
                <div key={percent} className="flex-1">
                  <input
                    type="radio"
                    id={`down-${percent}`}
                    name="downPayment"
                    value={percent}
                    checked={downPaymentPercentage === percent}
                    onChange={() => setDownPaymentPercentage(percent)}
                    className="hidden"
                  />
                  <label htmlFor={`down-${percent}`} className="block w-full text-center cursor-pointer p-2 rounded-lg transition-colors duration-200 ease-in-out font-semibold border border-gray-600"
                    style={{
                      backgroundColor: downPaymentPercentage === percent ? '#14B8A6' : '#4B5563',
                      color: downPaymentPercentage === percent ? '#ffffff' : '#D1D5DB'
                    }}>
                    {percent}%
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Loan Term Dropdown */}
          <div className="mb-4">
            <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-300 mb-2">ระยะเวลาผ่อน (เดือน)</label>
            <select
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-50 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            >
              {loanTerms.map(term => (
                <option key={term.value} value={term.value}>
                  {term.label}
                </option>
              ))}
            </select>
          </div>

          
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <button
            onClick={calculateInstallment}
            className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transform transition-all duration-200 ease-in-out hover:scale-105"
          >
            คำนวณค่างวด
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
          <Link href="/" 
            className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 ease-in-out hover:scale-105"
          >
            กลับหน้าหลัก
          </Link>
        </div>
        
        {/* Result Display */}
        <div className="text-center mt-6 p-4 bg-gray-700 rounded-lg">
          <p className="text-xl font-bold text-gray-200">
            ค่างวดต่อเดือน: 
          </p>
          <span id="installment-result" className="text-4xl font-extrabold text-teal-400">
            {monthlyInstallment !== null ? monthlyInstallment.toLocaleString('th-TH') : '0.00'}
          </span>
          <span className="text-xl font-normal ml-1 text-gray-400">บาท</span>
        </div>
        
      </div>
    </div>
  );
}
