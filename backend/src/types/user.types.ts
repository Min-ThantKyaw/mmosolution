import { Prisma } from "../generated/prisma/client.js";

export type UserWithPosts = Prisma.UserGetPayload<{
  include: { posts: true };
}>;

export interface RegisterInput {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    role: string;
  };
  accessToken: string;
}
