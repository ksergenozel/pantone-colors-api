# PANTONE Colors API

A web API that serves PANTONE color data.

> **Disclaimer:**
> This project is intended for non-commercial use only and is not associated with PANTONE.

## Motivation

After building [PANTONE Colors Scraper](https://github.com/ksergenozel/pantone-colors-scraper), a web scraper that collects PANTONE color data, I wanted to serve this data through an API.

## Features

This API serves PANTONE color data from a SQLite database with pagination and search support.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)

## Requirements

- [Node.js](https://nodejs.org/)

## Installation

Clone the repository:

```bash
git clone https://github.com/ksergenozel/pantone-colors-api.git
```

Navigate to the project folder:

```bash
cd pantone-colors-api
```

Install dependencies:

```bash
npm install
```

Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Configure environment variables:

```bash
PORT=3000
```

Obtain `pantone.db` and place it under the project's root:

> To generate the database, clone the [PANTONE Colors Scraper](https://github.com/ksergenozel/pantone-colors-scraper) project and run it.

## Usage

Development:

```bash
npm run dev
```

Production:

```bash
npm run build
```

```bash
npm start
```

## API Reference

### Get Colors

```http
GET /api/colors
```

### Query Parameters

| Parameter | Type   | Required | Description                                        |
| --------- | ------ | -------- | -------------------------------------------------- |
| `page`    | number | ✘        | Page number (default: 1)                           |
| `limit`   | number | ✘        | Number of colors per page (default: 100, max: 100) |
| `search`  | string | ✘        | Filters by `code` or `name`                        |

### Response

```json
{
  "page": 1,
  "limit": 100,
  "count": 100,
  "total": 27688,
  "totalPages": 277,
  "hasNextPage": true,
  "hasPrevPage": false,
  "nextPage": 2,
  "prevPage": null,
  "data": [
    {
      "code": "17-1230 TCX",
      "name": "Mocha Mousse",
      "collection": "Fashion & Interior Designers",
      "hex": "#A47864",
      "r": 164,
      "g": 120,
      "b": 100,
      "c": 0,
      "m": 27,
      "y": 39,
      "k": 36
    }
  ]
}
```

## License

This project is licensed under the [MIT License](LICENSE).
