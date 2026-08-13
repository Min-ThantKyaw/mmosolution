import bcrypt from "bcryptjs";
import prisma from "../config/database.js";
import { signToken } from "../utils/jwt.js";
import type { RegisterInput, AuthResponse } from "../types/user.types.js";

export const registerUser = async (input: RegisterInput): Promise<AuthResponse> => {
  const existing = await prisma.user.findFirst({
    where: { OR: [{ email: input.email }, { username: input.username }] },
  });

  if (existing) {
    throw new Error("Email or username already in use");
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

  const token = signToken({ userId: user.id, email: user.email });

  return {
    user: { id: user.id, name: user.name, username: user.username, email: user.email },
    token,
  };
};
