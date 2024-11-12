import React from "react";

function Home({ accountBalance }) {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Account Balance: ${accountBalance?.toFixed(2)}</p>
    </div>
  );
}

export default Home;
