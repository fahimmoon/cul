import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Clock, Percent, TrendingUp, Bird, Github, Instagram, MessageCircle } from 'lucide-react';

interface DailyResult {
  day: number;
  amount: number;
  percentage: number;
  dailyReturn: number;
}

function calculateDailyResults(principal: number, days: number): DailyResult[] {
  const results: DailyResult[] = [];
  let currentAmount = principal;
  const DAILY_PERCENTAGE = 1; // Fixed 1% rate

  for (let day = 1; day <= days; day++) {
    // Apply 1% twice daily
    const dailyReturn = (currentAmount * (DAILY_PERCENTAGE / 100)) * 2;
    currentAmount += dailyReturn;

    results.push({
      day,
      amount: currentAmount,
      percentage: DAILY_PERCENTAGE,
      dailyReturn
    });
  }

  return results;
}

function App() {
  const [principal, setPrincipal] = useState<number>(100);
  const [days, setDays] = useState<number>(30);
  const [dailyResults, setDailyResults] = useState<DailyResult[]>([]);
  const [showAllDays, setShowAllDays] = useState<boolean>(false);

  useEffect(() => {
    const results = calculateDailyResults(principal, days);
    setDailyResults(results);
  }, [principal, days]);

  const finalResult = dailyResults[dailyResults.length - 1];
  const displayDays = showAllDays ? dailyResults : dailyResults.slice(-5);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Moon Whale Intl Calculator
      </h1>
      <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
        {/* Calculator content will go here */}
        <p className="text-gray-600">Calculator coming soon...</p>
      </div>
    </div>
  );
}

export default App;