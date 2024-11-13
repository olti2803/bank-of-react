import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DollarSign, CreditCard, PiggyBank, ArrowUpRight } from "lucide-react";

function Home({ accountBalance, credits = [], debits = [] }) {
  const [savingsGoal, setSavingsGoal] = useState(() => {
    return JSON.parse(localStorage.getItem("savingsGoal")) || null;
  });
  const [showSavingsInput, setShowSavingsInput] = useState(false);
  const [newSavingsGoal, setNewSavingsGoal] = useState("");

  // Calculate total transactions from credits and debits props
  const totalTransactions = credits.length + debits.length;

  useEffect(() => {
    if (savingsGoal !== null) {
      localStorage.setItem("savingsGoal", JSON.stringify(savingsGoal));
    }
  }, [savingsGoal]);

  // const clearLocalStorage = () => {
  //   localStorage.clear();
  //   window.location.reload();
  //   alert("Local storage has been cleared!");
  // };

  const handleSetSavingsGoal = () => {
    setSavingsGoal(parseFloat(newSavingsGoal));
    setShowSavingsInput(false);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <div className="home-container">
      <div className="header-with-flag">
        <img src="/flag.png" alt="USA flag" className="flag-icon" />
        <h1 className="home-title">Welcome to Bank of React</h1>
      </div>

      <div className="card-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Account Balance</h2>
            <DollarSign className="card-icon" />
          </div>
          <div className="card-content">
            <div className="balance-amount">
              ${formatNumber(accountBalance?.toFixed(2))}
            </div>
            <p className="balance-description">Your current balance</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Total Transactions</h2>
            <CreditCard className="card-icon" />
          </div>
          <div className="card-content">
            <div className="transaction-count">
              {formatNumber(totalTransactions)}
            </div>
            <p className="transaction-description">All transactions</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Savings Goal</h2>
            <PiggyBank className="card-icon" />
          </div>
          <div className="card-content">
            {savingsGoal !== null ? (
              <div className="savings-amount">
                ${formatNumber(savingsGoal.toFixed(2))}
              </div>
            ) : (
              <div className="savings-amount">Savings goal not set</div>
            )}
            <p className="savings-description">Target savings amount</p>
          </div>
        </div>
      </div>

      {showSavingsInput && (
        <div className="savings-input">
          <input
            type="number"
            value={newSavingsGoal}
            onChange={(e) => setNewSavingsGoal(e.target.value)}
            placeholder="Enter new savings goal"
          />
          <button onClick={handleSetSavingsGoal}>Save Goal</button>
        </div>
      )}

      <div className="quick-actions">
        <h2 className="quick-actions-title">Quick Actions</h2>
        <p className="quick-actions-description">
          Manage your account with ease
        </p>

        <div className="action-buttons">
          <Link to="/credits" className="action-link">
            <button className="action-button">
              <CreditCard className="button-icon" /> View Credits
            </button>
          </Link>
          <Link to="/debits" className="action-link">
            <button className="action-button">
              <DollarSign className="button-icon" /> View Debits
            </button>
          </Link>
          <Link to="/userProfile" className="action-link">
            <button className="action-button">
              <ArrowUpRight className="button-icon" /> User Profile
            </button>
          </Link>
          <button
            className="action-button"
            onClick={() => setShowSavingsInput(!showSavingsInput)}
          >
            <PiggyBank className="button-icon" /> Set Savings Goal
          </button>

          {/* <button className="clear-storage-button" onClick={clearLocalStorage}>
            Clear Local Storage
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
