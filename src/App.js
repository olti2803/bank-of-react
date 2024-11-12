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

  // Load data from local storage or fetch from API
  useEffect(() => {
    const loadCredits = async () => {
      const storedCredits = JSON.parse(localStorage.getItem("credits"));
      if (storedCredits) {
        setCredits(storedCredits);
      } else {
        try {
          const response = await axios.get(
            "https://johnnylaicode.github.io/api/credits.json"
          );
          setCredits(response.data);
          localStorage.setItem("credits", JSON.stringify(response.data)); // Save to local storage
        } catch (error) {
          console.error("Error fetching credits:", error);
        }
      }
    };

    const loadDebits = async () => {
      const storedDebits = JSON.parse(localStorage.getItem("debits"));
      if (storedDebits) {
        setDebits(storedDebits);
      } else {
        try {
          const response = await axios.get(
            "https://johnnylaicode.github.io/api/debits.json"
          );
          setDebits(response.data);
          localStorage.setItem("debits", JSON.stringify(response.data)); // Save to local storage
        } catch (error) {
          console.error("Error fetching debits:", error);
        }
      }
    };

    loadCredits();
    loadDebits();
  }, []);

  // Update account balance whenever credits or debits change
  useEffect(() => {
    const totalCredits = credits.reduce(
      (sum, credit) => sum + credit.amount,
      0
    );
    const totalDebits = debits.reduce((sum, debit) => sum + debit.amount, 0);
    setAccountBalance(totalCredits - totalDebits);
  }, [credits, debits]);

  // Function to add a new credit and save to local storage
  const addCredit = (description, amount) => {
    const newCredit = { description, amount, date: new Date().toISOString() };
    const updatedCredits = [...credits, newCredit];
    setCredits(updatedCredits);
    localStorage.setItem("credits", JSON.stringify(updatedCredits)); // Update local storage
  };

  // Function to add a new debit and save to local storage
  const addDebit = (description, amount) => {
    const newDebit = { description, amount, date: new Date().toISOString() };
    const updatedDebits = [...debits, newDebit];
    setDebits(updatedDebits);
    localStorage.setItem("debits", JSON.stringify(updatedDebits)); // Update local storage
  };

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
        <Route
          path="/credits"
          element={<Credits credits={credits} addCredit={addCredit} />}
        />
        <Route
          path="/debits"
          element={<Debits debits={debits} addDebit={addDebit} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
