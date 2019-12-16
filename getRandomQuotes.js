"use strict";

const { movies, years } = require("./data");
const moviesArr = Object.keys(movies);

const range = count => Array(count).fill(null);

const getRand = arr => arr[Math.floor(Math.random() * arr.length)];

const appendRandomQuote = (currentQuotes, id = null, info = false) => {
  const movieID = id && movies[id] != null ? id : getRand(moviesArr);
  const quote = getRand(movies[movieID].quotes);
  return currentQuotes.includes(quote) ||
    currentQuotes.some(obj => obj.quote === quote)
    ? appendRandomQuote(currentQuotes, id, info)
    : [
        ...currentQuotes,
        info
          ? {
              title: movies[movieID].title,
              year: movies[movieID].year,
              quote
            }
          : quote
      ];
};

const getRandomQuotes = (quoteCount, id = null, info = false) => {
  const max =
    id && movies[id] != null ? movies[id].quotes.length : moviesArr.length;
  return range(Math.min(quoteCount, max)).reduce(
    out => appendRandomQuote(out, id, info),
    []
  );
};

const appendRandomQuoteForYear = (currentQuotes, year, info = false) => {
  const movieIDs = year && years[year] != null ? years[year] : moviesArr;
  const movieID = getRand(movieIDs);
  const quote = getRand(movies[movieID].quotes);
  return currentQuotes.includes(quote) ||
    currentQuotes.some(obj => obj.quote === quote)
    ? appendRandomQuoteForYear(currentQuotes, year, info)
    : [
        ...currentQuotes,
        info
          ? {
              title: movies[movieID].title,
              year: movies[movieID].year,
              quote
            }
          : quote
      ];
};

const getRandomQuotesForYear = (quoteCount, year, info = false) => {
  let max = moviesArr.length;
  if (year && years[year] != null) {
    max = 0;
    years[year].forEach(movieID => {
      max += movies[movieID].quotes.length;
    });
  }
  return range(Math.min(quoteCount, max)).reduce(
    out => appendRandomQuoteForYear(out, year, info),
    []
  );
};

module.exports = { getRandomQuotes, getRandomQuotesForYear };
