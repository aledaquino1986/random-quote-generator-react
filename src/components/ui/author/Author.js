import React from "react";
import "./author.css";

const Author = ({ author }) => {
  return (
    <div className="quote-author-container">
      <span className="quote-author-container__author">{author}</span>
    </div>
  );
};

export default Author;
