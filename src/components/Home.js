import React from "react";
import { DollarSign, CreditCard, PiggyBank, ArrowUpRight } from "lucide-react";

function Home({ accountBalance }) {
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
            <div className="balance-amount">${accountBalance?.toFixed(2)}</div>
            <p className="balance-description">Your current balance</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Transactions</h2>
            <CreditCard className="card-icon" />
          </div>
          <div className="card-content">
            <div className="transaction-count">5</div>
            <p className="transaction-description">In the last 7 days</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Savings Goal</h2>
            <PiggyBank className="card-icon" />
          </div>
          <div className="card-content">
            <div className="savings-amount">$10,000</div>
            <p className="savings-description">Target savings amount</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2 className="quick-actions-title">Quick Actions</h2>
        <p className="quick-actions-description">
          Manage your account with ease
        </p>

        <div className="action-buttons">
          <button className="action-button">
            <CreditCard className="button-icon" /> View Credits
          </button>
          <button className="action-button">
            <DollarSign className="button-icon" /> View Debits
          </button>
          <button className="action-button">
            <ArrowUpRight className="button-icon" /> Transfer Money
          </button>
          <button className="action-button">
            <PiggyBank className="button-icon" /> Set Savings Goal
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
