import { db } from "#config/db.js";
import { Color } from "./model.js";
export const getColors = (limit: number = 100, offset: number = 0): Color[] => {
  const maxLimit = Math.min(limit, 100);
  const query = `
    SELECT * FROM colors
    ORDER BY 
      CASE collection
        WHEN 'Fashion & Interior Designers' THEN 1
        WHEN 'Graphic Designers' THEN 2
        WHEN 'Industrial Designers' THEN 3
        ELSE 99
      END,
      (name = '') ASC,
      name ASC
    LIMIT ? OFFSET ?
  `;
  return db.prepare(query).all(maxLimit, offset) as Color[];
};

export const getTotalColorCount = (): number => {
  const row = db.prepare("SELECT COUNT(*) AS count FROM colors").get() as {
    count: number;
  };
  return row.count;
};
