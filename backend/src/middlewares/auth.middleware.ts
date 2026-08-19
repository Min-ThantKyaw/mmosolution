import type { Request, Response, NextFunction } from "express";
import type { JwtPayload } from "../utils/jwt.js";
import { verifyToken } from "../utils/jwt.js";
export interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}
export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({
      message: "No authorization header provided",
    });
    return;
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    res.status(401).json({
      message: "Invalid authorization format",
    });
    return;
  }

  try {
    const payload = verifyToken(token);

	  req.user = payload;
	  console.log("Authenticated user:", req.user);

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};
