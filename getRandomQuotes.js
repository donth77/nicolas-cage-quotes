"use strict";

const { movies, years } = require("./data");
const moviesArr = Object.keys(movies);

const range = count => Array(count).fill(null);

const getRand = arr => arr[Math.floor(Math.random() * arr.length)];

const appendRandomQuote = (currentQuotes, id = null) => {
  const movieID = id && movies[id] != null ? id : getRand(moviesArr);
  const quote = getRand(movies[movieID].quotes);
  return currentQuotes.includes(quote)
    ? appendRandomQuote(currentQuotes, id)
    : [...currentQuotes, quote];
};

const getRandomQuotes = (quoteCount, id = null) => {
  const max =
    id && movies[id] != null ? movies[id].quotes.length : moviesArr.length;
  return range(Math.min(quoteCount, max)).reduce(
    out => appendRandomQuote(out, id),
    []
  );
};

const appendRandomQuoteForYear = (currentQuotes, year) => {
  const movieIDs = year && years[year] != null ? years[year] : moviesArr;
  const movieID = getRand(movieIDs);
  const quote = getRand(movies[movieID].quotes);
  return currentQuotes.includes(quote)
    ? appendRandomQuoteForYear(currentQuotes, year)
    : [...currentQuotes, quote];
};

const getRandomQuotesForYear = (quoteCount, year) => {
  let max = moviesArr.length;
  if (year && years[year] != null) {
    max = 0;
    years[year].forEach(movieID => {
      max += movies[movieID].quotes.length;
    });
  }
  return range(Math.min(quoteCount, max)).reduce(
    out => appendRandomQuoteForYear(out, year),
    []
  );
};

module.exports = { getRandomQuotes, getRandomQuotesForYear };
