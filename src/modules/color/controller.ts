import { Request, Response, RequestHandler } from "express";
import { getColors as getColorsFromService, getTotalColorCount } from "./service.js";

export const getColors: RequestHandler = (req: Request, res: Response) => {
  try {
    const { limit, page } = req.query;

    const parsedLimit = Math.min(parseInt((limit as string) || "100", 10), 100);
    const parsedPage = Math.max(parseInt((page as string) || "1", 10), 1);
    const offset = (parsedPage - 1) * parsedLimit;

    const colors = getColorsFromService(parsedLimit, offset);

    const total = getTotalColorCount();
    const totalPages = Math.ceil(total / parsedLimit);

    const hasNextPage = parsedPage < totalPages;
    const hasPrevPage = parsedPage > 1;
    const nextPage = hasNextPage ? parsedPage + 1 : null;
    const prevPage = hasPrevPage ? parsedPage - 1 : null;

    res.status(200).json({
      page: parsedPage,
      limit: parsedLimit,
      count: colors.length,
      total,
      totalPages,
      hasNextPage,
      hasPrevPage,
      nextPage,
      prevPage,
      data: colors,
    });
  } catch (error) {
    console.error("Error fetching colors:", error);
    res.status(500).json({ message: "Failed to fetch colors" });
  }
};
