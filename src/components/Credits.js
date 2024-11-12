import React from "react";

function Credits({ credits }) {
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
