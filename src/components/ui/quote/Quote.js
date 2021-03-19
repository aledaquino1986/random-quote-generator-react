import React from "react";
import "./quote.css";

const Quote = ({ quote }) => {
  return (
    <div className="quote-text-container">
      <i className="fas fa-quote-left"></i>
      <span className="quote-text-container__quote">{quote}</span>
    </div>
  );
};

export default Quote;
