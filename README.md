# accolade

The [Accolade](https://github.com/thomax/accolade/) skill algorithm behind an HTTP API

## Usage

### `/rate`

Based on game outcome, get new fame.

Request body must contain teams with players and their individual fame. Accolade assumes the first team in the list won the match, then returns the same teams with adjusted fame.

**POST /rate** (`Content-Type: application/json`)

Request body:
```json
{
  "teams": [
    [
      {"id": 13, "fame": 88},
      {"id": 14, "fame": 53}
    ],
    [
      {"id": 37, "fame": 75},
      {"id": 17, "fame": 62}
    ]
  ]
}
```

- Winning team first
- `id` (player ID) is not required, but allowed
- `fame` default: `50`

```json
{
  "teams": [
    [
      {"id": 13, "fame": 94},
      {"id": 14, "fame": 60}
    ],
    [
      {"id": 37, "fame": 62},
      {"id": 17, "fame": 56}
    ]
  ]
}
```

### `/quality`

Based on team composition and fame, give a percentage chance of the first team winning, plus individual bet size

**POST /quality** (`Content-Type: application/json`)

Request body:
```json
{
  "teams": [
    [
      {"id": 1, "fame": 50},
      {"id": 2, "fame": 89}
    ],
    [
      {"id": 3, "fame": 71},
      {"id": 4, "fame": 40}
    ]
  ]
}
```

```json
{
  "quality": 55.60000000000001,
  "teams": [
    [
      {
        "id": 1,
        "fame": 50,
        "betSize": 5
      },
      {
        "id": 2,
        "fame": 89,
        "betSize": 8
      }
    ],
    [
      {
        "id": 3,
        "fame": 71,
        "betSize": 7
      },
      {
        "id": 4,
        "fame": 40,
        "betSize": 4
      }
    ]
  ]
}
```

Try it out

```
npm install
npm run test
npm run dev-start
curl -XPOST 'http://localhost:5000/rate' -H "Content-Type: application/json" -X POST -d '{"teams": [[{"id": 1, "fame": 50},{"id": 2, "fame": 50}],[{"id": 3, "fame": 40},{"id": 4, "fame": 40}]]}'
```

## License

MIT-licensed. See LICENSE.
