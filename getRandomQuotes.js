"use strict";

const movies = require("./quotes");
const moviesArr = Object.keys(movies);

const range = count => Array(count).fill(null);

const appendRandomQuote = (currentQuotes, id = null) => {
  const movieID =
    id && movies[id]
      ? id
      : moviesArr[Math.floor(Math.random() * moviesArr.length)];
  const quote =
    movies[movieID].quotes[
      Math.floor(Math.random() * movies[movieID].quotes.length)
    ];
  return currentQuotes.includes(quote)
    ? appendRandomQuote(currentQuotes, id)
    : [...currentQuotes, quote];
};

const getRandomQuotes = (quoteCount, id = null) => {
  const max = id && movies[id] ? movies[id].quotes.length : moviesArr.length;
  return range(Math.min(quoteCount, max)).reduce(
    out => appendRandomQuote(out, id),
    []
  );
};

module.exports = getRandomQuotes;
