import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "secret";
const JWT_EXPIRES_IN = "1h";

export interface JwtPayload {
  userId: number;
  email: string;
}

export const signToken = (payload: JwtPayload): string =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

export const verifyToken = (token: string): JwtPayload =>
  jwt.verify(token, JWT_SECRET) as JwtPayload;
