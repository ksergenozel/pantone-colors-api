import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dbPath = path.resolve(process.cwd(), "pantone.db");

if (!fs.existsSync(dbPath)) {
  throw new Error("pantone.db not found. Please add it to the project root directory.");
}

let db: Database.Database;

try {
  db = new Database(dbPath, { readonly: true });
} catch (err) {
  console.error("Database connection failed:", err);
  process.exit(1);
}

export { db };
