import React, { useState } from "react";

function Debits({ debits, addDebit }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDebit(description, parseFloat(amount));
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <h1>Debits</h1>
      <ul>
        {debits.map((debit, index) => (
          <li key={index}>
            {debit.description} - ${debit.amount.toFixed(2)} on{" "}
            {new Date(debit.date).toLocaleDateString()}
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
        <button type="submit">Add Debit</button>
      </form>
    </div>
  );
}

export default Debits;
