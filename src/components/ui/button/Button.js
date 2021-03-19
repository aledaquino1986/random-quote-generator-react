import React from "react";
import "./button.css";

const Button = ({ content, className = "", onClick = () => {} }) => {
  return (
    <button className={`button ${className} `} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
