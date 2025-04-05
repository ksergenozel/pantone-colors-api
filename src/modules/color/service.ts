import { db } from "#config/db.js";
import { Color } from "./model.js";

export const getColors = (limit: number = 100, offset: number = 0): Color[] => {
  const maxLimit = Math.min(limit, 100);
  const query = `
    SELECT * FROM colors ORDER BY collection ASC LIMIT ? OFFSET ?
  `;
  return db.prepare(query).all(maxLimit, offset) as Color[];
};

export const getTotalColorCount = (): number => {
  const row = db.prepare("SELECT COUNT(*) AS count FROM colors").get() as {
    count: number;
  };
  return row.count;
};

export const searchColors = (
  search: string,
  limit: number = 100,
  offset: number = 0,
): Color[] => {
  const maxLimit = Math.min(limit, 100);
  const query = `
    SELECT * FROM colors 
    WHERE code LIKE ? OR name LIKE ?
    ORDER BY collection ASC 
    LIMIT ? OFFSET ?
  `;
  const searchQuery = `%${search}%`;
  return db
    .prepare(query)
    .all(searchQuery, searchQuery, maxLimit, offset) as Color[];
};

export const getSearchColorCount = (search: string): number => {
  const query = `
    SELECT COUNT(*) AS count FROM colors
    WHERE code LIKE ? OR name LIKE ?
  `;
  const searchQuery = `%${search}%`;
  const row = db.prepare(query).get(searchQuery, searchQuery) as {
    count: number;
  };
  return row.count;
};
