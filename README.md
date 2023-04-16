# Nicolas Cage Quotes API

## Production host

[https://nicolas-cage-quotes.onrender.com/quotes](https://nicolas-cage-quotes.onrender.com/quotes)

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

## APIs

### `GET /quotes`

Returns an array with one quote:

```json
["Fuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuck!"]
```

### `GET /quotes/<count>`

Returns an array with `<count>` quotes e.g. `GET /quotes/2`

```json
[
  "All right, but when they attack the car, save the radio.",
  "OH, NO! NOT THE BEES! NOT THE BEES!"
]
```

### `GET /quotes?movie=<movieID>`

Returns an array with quotes from a specific movie e.g. `GET /quotes?movie=face-off`

```json
["I want to take his face… off."]
```

### `GET /quotes?year=<year>`

Returns an array with quotes from a specific year e.g. `GET /quotes/3?year=2011`

```json
[
  "Merry Christmas, YOU ASSHOLES!",
  "I never disrobe before gunplay.",
  "In your hands they go back to being nothing but rocks."
]
```

### `GET /quotes?info=true`

Provides `title` and `year` data for the quotes. Can be used along with the `movie` and `year` parameters e.g. `GET /quotes/3?movie=con-air&info=true`

```json
[
  {
    "title": "Con Air",
    "year": "1997",
    "quote": "Put… the bunny… back… in the box."
  },
  {
    "title": "Con Air",
    "year": "1997",
    "quote": "What do you think I'm gonna do? I'm gonna save the fuckin' day!"
  },
  {
    "title": "Con Air",
    "year": "1997",
    "quote": "Well Hoorah for the sounds of fucking silence."
  }
]
```
