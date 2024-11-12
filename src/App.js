import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";

function App() {
  const [accountBalance, setAccountBalance] = useState(0);
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState([]);

  useEffect(() => {
    // Placeholder for future API calls to fetch credits and debits
    const mockCredits = [
      { description: "Credit 1", amount: 100, date: "2023-01-01" },
      { description: "Credit 2", amount: 200, date: "2023-02-01" },
    ];
    const mockDebits = [
      { description: "Debit 1", amount: 50, date: "2023-01-15" },
      { description: "Debit 2", amount: 75, date: "2023-02-10" },
    ];
    setCredits(mockCredits);
    setDebits(mockDebits);

    // Calculate account balance based on credits and debits
    const totalCredits = mockCredits.reduce(
      (sum, credit) => sum + credit.amount,
      0
    );
    const totalDebits = mockDebits.reduce(
      (sum, debit) => sum + debit.amount,
      0
    );
    setAccountBalance(totalCredits - totalDebits);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home accountBalance={accountBalance} />}
        />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/credits" element={<Credits credits={credits} />} />
        <Route path="/debits" element={<Debits debits={debits} />} />
      </Routes>
    </Router>
  );
}

export default App;
