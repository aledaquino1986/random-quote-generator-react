import React, { useState, useEffect } from "react";
import Quote from "../ui/quote/Quote";
import Author from "../ui/author/Author";
import Button from "../ui/button/Button";
import Spinner from "../ui/spinner/Spinner";

import "./main.css";

const Main = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newQuote, setNewQuote] = useState({
    text: "",
    author: ""
  });

  useEffect(() => {
    async function fetchInfo() {
      const apiUrl = "https://type.fit/api/quotes";

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setQuotes(data);

        retrieveQuote(data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchInfo();
  }, []);

  const retrieveQuote = quotes => {
    const { text, author } = quotes[Math.floor(Math.random() * quotes.length)];

    setNewQuote({
      text: text,
      author: author
    });
  };

  return (
    <main className="quote-container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Quote quote={newQuote.text} />
          <Author author={newQuote.author} />
          <div className="button-container">
            <Button
              content={<i className="fab fa-twitter"></i>}
              className="button-twitter"
            />
            <Button content="New Quote" onClick={() => retrieveQuote(quotes)} />
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
