# Nicolas Cage Quotes API

## Production host

[https://nicolas-cage-quotes.herokuapp.com/quotes](https://nicolas-cage-quotes.herokuapp.com/quotes)

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

## APIs

### `GET /quotes`

Returns an array with one quote:

```json
[
    "Fuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuck!"
]
```

### `GET /quotes/<count>`

Returns an array with `<count>` quotes e.g. `GET /quotes/2`

```json
[
    "All right, but when they attack the car, save the radio.",
    "OH, NO! NOT THE BEES! NOT THE BEES!"
]
```
