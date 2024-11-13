import React, { useState } from "react";

function Credits({ credits, addCredit }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCredit(description, parseFloat(amount));
    setDescription("");
    setAmount("");
  };

  return (
    <div className="credits-container">
      <h1>Credits</h1>
      <ul className="credits-list">
        {credits.map((credit, index) => (
          <li key={index} className="credit-item">
            <span className="credit-description">{credit.description}</span>
            <span className="credit-amount">
              $
              {typeof credit.amount === "number"
                ? credit.amount.toFixed(2)
                : parseFloat(credit.amount).toFixed(2)}
            </span>
            <span className="credit-date">
              {new Date(credit.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="credit-form">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Credit</button>
      </form>
    </div>
  );
}

export default Credits;
