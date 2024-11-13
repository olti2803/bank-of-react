// Card.js
import React from "react";

export function Card({ children, className }) {
  return <div className={`custom-card ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }) {
  return <div className={`custom-card-header ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`custom-card-title ${className}`}>{children}</h2>;
}

export function CardContent({ children, className }) {
  return <div className={`custom-card-content ${className}`}>{children}</div>;
}

export function CardDescription({ children, className }) {
  return <p className={`custom-card-description ${className}`}>{children}</p>;
}
