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
    <div>
      <h1>Credits</h1>
      <ul>
        {credits.map((credit, index) => (
          <li key={index}>
            {credit.description} - ${credit.amount.toFixed(2)} on{" "}
            {new Date(credit.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
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
