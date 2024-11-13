import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";
import Navbar from "./components/Navbar";

function App() {
  const [accountBalance, setAccountBalance] = useState(0);
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    userName: "Joe Smith",
    memberSince: "11/22/99",
  });

  const mockLogIn = (userName) => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    const newUser = {
      userName: userName,
      memberSince: storedUser
        ? storedUser.memberSince
        : new Date().toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          }),
    };
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

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
          localStorage.setItem("credits", JSON.stringify(response.data));
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
          localStorage.setItem("debits", JSON.stringify(response.data));
        } catch (error) {
          console.error("Error fetching debits:", error);
        }
      }
    };

    loadCredits();
    loadDebits();
  }, []);

  useEffect(() => {
    const totalCredits = credits.reduce(
      (sum, credit) => sum + credit.amount,
      0
    );
    const totalDebits = debits.reduce((sum, debit) => sum + debit.amount, 0);
    setAccountBalance(totalCredits - totalDebits);
  }, [credits, debits]);

  const addCredit = (description, amount) => {
    if (!description || isNaN(amount) || amount === "") {
      alert("Please provide a valid description and amount.");
      return;
    }

    const newCredit = {
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };

    const updatedCredits = [...credits, newCredit];
    setCredits(updatedCredits);
    localStorage.setItem("credits", JSON.stringify(updatedCredits));
  };

  const addDebit = (description, amount) => {
    if (!description || isNaN(amount) || amount === "") {
      alert("Please provide a valid description and amount.");
      return;
    }

    const newDebit = {
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };

    const updatedDebits = [...debits, newDebit];
    setDebits(updatedDebits);
    localStorage.setItem("debits", JSON.stringify(updatedDebits));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              accountBalance={accountBalance}
              credits={credits}
              debits={debits}
            />
          }
        />

        <Route
          path="/userProfile"
          element={
            <UserProfile
              userName={currentUser.userName}
              memberSince={currentUser.memberSince}
            />
          }
        />
        <Route path="/login" element={<Login mockLogIn={mockLogIn} />} />
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
