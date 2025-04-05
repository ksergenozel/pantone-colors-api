import { Request, Response, NextFunction } from "express";

export const simpleLogger = (req: Request, _: Response, next: NextFunction) => {
  const { method, url, headers } = req;
  const userAgent = headers["user-agent"] || "unknown";
  const ipAddress = req.ip || req.socket.remoteAddress || "unknown";

  console.log(
    `[${new Date().toISOString()}] ${method} ${url} - User-Agent: ${userAgent} - IP: ${ipAddress}`,
  );

  next();
};
