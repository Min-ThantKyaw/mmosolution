import bcrypt from "bcryptjs";
import prisma from "../config/database.js";
import { signToken } from "../utils/jwt.js";
import { HttpError } from "../utils/http-error.js";
import type {
  RegisterInput,
  LoginInput,
  AuthResponse,
} from "../types/user.types.js";

export const registerUser = async (
  input: RegisterInput,
): Promise<AuthResponse> => {
  const existing = await prisma.user.findFirst({
    where: { OR: [{ email: input.email }, { username: input.username }] },
  });

  if (existing) {
    throw new HttpError(409, "Validation", "Email or username already exists");
  }

  const hashedPassword = await bcrypt.hash(input.password, 10);

  const user = await prisma.user.create({
    data: {
      name: input.name,
      username: input.username,
      email: input.email,
      password: hashedPassword,
    },
  });

  const accessToken = signToken({ userId: user.id, role: user.role });

  return {
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    accessToken,
  };
};

export const loginUser = async (input: LoginInput): Promise<AuthResponse> => {
  if (
    typeof input?.email !== "string" ||
    typeof input?.password !== "string" ||
    !input.email.trim() ||
    !input.password.trim()
  ) {
    throw new HttpError(400, "VALIDATION", "Email and password are required");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: input.email,
    },
  });

  if (!user) {
    throw new HttpError(401, "UNAUTHORIZED", "Invalid email or password");
  }

  const passwordMatches = await bcrypt.compare(input.password, user.password);
  if (!passwordMatches) {
    throw new HttpError(401, "UNAUTHORIZED", "Invalid email or password");
  }

  if (!user.isActive || user.isBanned || user.deletedAt) {
    throw new HttpError(401, "UNAUTHORIZED", "Invalid email or password");
  }

  const accessToken = signToken({ userId: user.id, role: user.role });

  return {
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    accessToken,
  };
};

