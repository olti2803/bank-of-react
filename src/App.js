import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
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
    const fetchCredits = async () => {
      try {
        const response = await axios.get(
          "https://johnnylaicode.github.io/api/credits.json"
        );
        setCredits(response.data);
      } catch (error) {
        console.error("Error fetching credits:", error);
      }
    };

    const fetchDebits = async () => {
      try {
        const response = await axios.get(
          "https://johnnylaicode.github.io/api/debits.json"
        );
        setDebits(response.data);
      } catch (error) {
        console.error("Error fetching debits:", error);
      }
    };

    fetchCredits();
    fetchDebits();
  }, []);

  useEffect(() => {
    // Calculate account balance based on credits and debits
    const totalCredits = credits.reduce(
      (sum, credit) => sum + credit.amount,
      0
    );
    const totalDebits = debits.reduce((sum, debit) => sum + debit.amount, 0);
    setAccountBalance(totalCredits - totalDebits);
  }, [credits, debits]);

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
