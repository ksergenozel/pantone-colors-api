# PANTONE Colors API

A web API that serves PANTONE color data.

> **Disclaimer:**
> This project is intended for non-commercial use only and is not associated with PANTONE.

## Motivation

After building [PANTONE Colors Scraper](https://github.com/ksergenozel/pantone-colors-scraper) — a web scraper that collects PANTONE color data and stores it in a SQLite database — I wanted to make this data available through an API.

## Features

This API serves PANTONE color data from SQLite database with pagination and search support.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3/)

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

## Usage

```bash
npm run dev
```

> This script creates `data.json`, `data.csv` and `pantone.db` files in the root directory.

## License

This project is licensed under the [MIT License](LICENSE).
