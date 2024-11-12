import React, { useState, useEffect } from "react";

function Credits() {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    // Placeholder for fetching data from API
    const mockCredits = [
      { description: "Credit 1", amount: 100, date: "2023-01-01" },
      { description: "Credit 2", amount: 200, date: "2023-02-01" },
    ];
    setCredits(mockCredits);
  }, []);

  return (
    <div>
      <h1>Credits</h1>
      <ul>
        {credits.map((credit, index) => (
          <li key={index}>
            {credit.description} - ${credit.amount} on {credit.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Credits;
