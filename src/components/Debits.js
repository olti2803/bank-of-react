import React, { useState, useEffect } from "react";

function Debits() {
  const [debits, setDebits] = useState([]);

  useEffect(() => {
    // Placeholder for fetching data from API
    const mockDebits = [
      { description: "Debit 1", amount: 50, date: "2023-01-15" },
      { description: "Debit 2", amount: 75, date: "2023-02-10" },
    ];
    setDebits(mockDebits);
  }, []);

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
