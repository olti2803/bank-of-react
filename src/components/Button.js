// Button.js
import React from "react";

export function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {children}
    </button>
  );
}
