"use client";

import { useState, useEffect } from "react";
import { Info, CheckCircle, AlertTriangle } from "lucide-react";

export default function EligibilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(75000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(25000);
  const [existingEmi, setExistingEmi] = useState(10000);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(9.5);

  const [eligibleLoan, setEligibleLoan] = useState(0);
  const [eligibleEmi, setEligibleEmi] = useState(0);
  const [isEligible, setIsEligible] = useState(true);

  useEffect(() => {
    // FOIR (Fixed Obligation to Income Ratio) limit is usually 50% to 60% of income. Let's use 50% as standard.
    const foirLimit = monthlyIncome * 0.5;
    
    // Max EMI capacity = foirLimit - existingEmi
    const maxEmiCapacity = Math.max(0, foirLimit - existingEmi);
    
    const r = interestRate / 12 / 100; // Monthly interest rate
    const n = tenureYears * 12; // Monthly tenure

    if (maxEmiCapacity > 0 && r > 0) {
      // Loan Amount = [Max EMI * ((1+r)^n - 1)] / [r * (1+r)^n]
      const numerator = maxEmiCapacity * (Math.pow(1 + r, n) - 1);
      const denominator = r * Math.pow(1 + r, n);
      const calculatedLoan = numerator / denominator;

      setEligibleLoan(calculatedLoan);
      setEligibleEmi(maxEmiCapacity);
      setIsEligible(calculatedLoan >= 100000); // Minimum eligible loan is ₹1 Lakh
    } else {
      setEligibleLoan(0);
      setEligibleEmi(0);
      setIsEligible(false);
    }
  }, [monthlyIncome, monthlyExpenses, existingEmi, tenureYears, interestRate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
      <div className="bg-primary-navy px-6 py-5 border-b border-accent-gold/20">
        <h3 className="text-white font-bold text-lg tracking-wide">Eligibility Calculator</h3>
        <p className="text-slate-300 text-xs mt-1">Check your approximate loan capacity instantly</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          {/* Income Slider */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-600">Net Monthly Salary/Income</span>
              <span className="text-primary-navy bg-slate-100 px-3 py-1 rounded-md text-sm font-bold">
                {formatCurrency(monthlyIncome)}
              </span>
            </div>
            <input
              type="range"
              min="15000"
              max="500000"
              step="5000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent-gold"
            />
          </div>

          {/* Existing EMIs */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-600">Existing Monthly EMIs</span>
              <span className="text-primary-navy bg-slate-100 px-3 py-1 rounded-md text-sm font-bold">
                {formatCurrency(existingEmi)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="150000"
              step="2000"
              value={existingEmi}
              onChange={(e) => setExistingEmi(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent-gold"
            />
          </div>

          {/* Tenure Slider */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-600">Desired Tenure</span>
              <span className="text-primary-navy bg-slate-100 px-3 py-1 rounded-md text-sm font-bold">
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
            <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
              <span>1 Year</span>
              <span>7 Years</span>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-[#fafbfc] rounded-xl p-5 border border-slate-100 space-y-4">
          {isEligible ? (
            <div className="text-center py-2 space-y-3">
              <div className="flex justify-center items-center gap-1.5 text-emerald-600 text-xs font-bold uppercase tracking-widest">
                <CheckCircle className="w-4 h-4" /> Eligible
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Eligible Loan Amount
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
                  {formatCurrency(eligibleLoan)}
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-400">
                  Estimated Eligible Monthly EMI: <strong className="text-slate-700 font-bold">{formatCurrency(eligibleEmi)}</strong>
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center py-5 space-y-2">
              <div className="flex justify-center items-center gap-1.5 text-amber-600 text-xs font-bold uppercase tracking-widest">
                <AlertTriangle className="w-5 h-5" /> Low eligibility
              </div>
              <p className="text-xs text-slate-500 max-w-[250px] mx-auto">
                Based on your current monthly commitment, your eligibility limit is below our minimum threshold of ₹1 Lakh. Try increasing the tenure or reducing existing debts.
              </p>
            </div>
          )}
        </div>

        <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg">
          <Info className="w-4 h-4 text-primary-navy shrink-0 mt-0.5" />
          <span>
            Actual eligibility depends on verification of income documents, credit score (CIBIL), property valuation, and loan type policies.
          </span>
        </div>
      </div>
    </div>
  );
}
