import React from "react";

function Debits({ debits }) {
  return (
    <div>
      <h1>Debits</h1>
      <ul>
        {debits.map((debit, index) => (
          <li key={index}>
            {debit.description} - ${debit.amount} on {debit.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Debits;
