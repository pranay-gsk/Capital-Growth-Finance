"use client";

import { useState, useEffect } from "react";
import { Info } from "lucide-react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(800000); // 8 Lakhs default
  const [interestRate, setInterestRate] = useState(9.5); // 9.5% default
  const [tenureYears, setTenureYears] = useState(5); // 5 Years default

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100; // Monthly interest rate
    const n = tenureYears * 12; // Monthly tenure

    if (r === 0) {
      const calculatedEmi = P / n;
      setEmi(calculatedEmi);
      setTotalPayment(P);
      setTotalInterest(0);
    } else {
      const calculatedEmi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const calculatedTotalPayment = calculatedEmi * n;
      const calculatedTotalInterest = calculatedTotalPayment - P;

      setEmi(calculatedEmi);
      setTotalPayment(calculatedTotalPayment);
      setTotalInterest(calculatedTotalInterest);
    }
  }, [loanAmount, interestRate, tenureYears]);

  // Format helper for Indian currency system
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const interestPercentage = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;
  const principalPercentage = totalPayment > 0 ? (loanAmount / totalPayment) * 100 : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
      <div className="bg-primary-navy px-6 py-5 border-b border-accent-gold/20">
        <h3 className="text-white font-bold text-lg tracking-wide">EMI Calculator</h3>
        <p className="text-slate-300 text-xs mt-1">Estimate your monthly outgoings instantly</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Sliders Area */}
        <div className="space-y-5">
          {/* Loan Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-600">Loan Amount</span>
              <span className="text-primary-navy bg-slate-100 px-3 py-1 rounded-md text-base font-bold">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min="100000"
              max="15000000"
              step="25000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent-gold"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>₹1 Lakh</span>
              <span>₹1.5 Crores</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-600">Interest Rate (p.a.)</span>
              <span className="text-primary-navy bg-slate-100 px-3 py-1 rounded-md text-base font-bold">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min="6"
              max="18"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent-gold"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>6%</span>
              <span>18%</span>
            </div>
          </div>

          {/* Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-600">Tenure</span>
              <span className="text-primary-navy bg-slate-100 px-3 py-1 rounded-md text-base font-bold">
                {tenureYears} Years
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="7"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent-gold"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>1 Year</span>
              <span>7 Years</span>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="bg-[#fafbfc] rounded-xl p-5 border border-slate-100 space-y-4">
          <div className="text-center py-2 border-b border-slate-100">
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Monthly EMI
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
              {formatCurrency(emi)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="py-2">
              <span className="block text-[11px] font-semibold text-slate-400 uppercase">
                Principal Amount
              </span>
              <span className="text-sm font-bold text-slate-700">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <div className="py-2">
              <span className="block text-[11px] font-semibold text-slate-400 uppercase">
                Total Interest Payable
              </span>
              <span className="text-sm font-bold text-slate-700">
                {formatCurrency(totalInterest)}
              </span>
            </div>
          </div>

          {/* Ratio bar */}
          <div className="space-y-1.5">
            <div className="flex h-3 rounded-full overflow-hidden">
              <div
                style={{ width: `${principalPercentage}%` }}
                className="bg-primary-navy transition-all duration-300"
                title="Principal"
              />
              <div
                style={{ width: `${interestPercentage}%` }}
                className="bg-accent-gold transition-all duration-300"
                title="Interest"
              />
            </div>
            <div className="flex justify-between text-[10px] font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-navy inline-block" />
                Principal: {principalPercentage.toFixed(1)}%
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-gold inline-block" />
                Interest: {interestPercentage.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg">
          <Info className="w-4 h-4 text-primary-navy shrink-0 mt-0.5" />
          <span>
            This calculator provides illustrative values only. Exact interest rates, processing fees, and EMIs depend on credit assessment.
          </span>
        </div>
      </div>
    </div>
  );
}
