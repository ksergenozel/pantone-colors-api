import { Request, Response, RequestHandler } from "express";
import { getColors as getColorsFromService } from "./service.js";

export const getColors: RequestHandler = (req: Request, res: Response): void => {
  try {
    const { limit } = req.query;
    const parsedLimit = limit ? parseInt(limit as string) : undefined;
    const colors = getColorsFromService(parsedLimit);
    res.status(200).json({ data: colors });
  } catch (error) {
    console.error("Error fetching colors:", error);
    res.status(500).json({ message: "Failed to fetch colors" });
  }
};
