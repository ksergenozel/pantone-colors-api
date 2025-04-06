import rateLimit from "express-rate-limit";

// 100 requests per minute per IP address.
export const rateLimtier = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests.",
});
