import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = parseInt(process.env.JWT_EXPIRES_IN || '3600');

console.log(JWT_EXPIRES_IN)

// Fail fast instead of signing with a weak default secret.
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not set — add it to .env before starting the server");
}

export interface JwtPayload {
  userId: number;
  role: "ADMIN" | "WRITER" | "READER";
}

export const signToken = (payload: JwtPayload): string =>
  jwt.sign(
    payload,
    JWT_SECRET!,
    {
      expiresIn: JWT_EXPIRES_IN,
      algorithm: "HS256"
    }
  );


export const verifyToken = (token: string): JwtPayload =>
  jwt.verify(
    token,
    JWT_SECRET,
    {
      algorithms: ["HS256"]
    }) as JwtPayload;
