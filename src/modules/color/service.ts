import { db } from "#config/db.js";
import { Color } from "./model.js";

export const getColors = (limit: number = 100): Color[] => {
  const maxLimit = Math.min(limit, 100);
  return db.prepare("SELECT * FROM colors LIMIT ?").all(maxLimit) as Color[];
};
