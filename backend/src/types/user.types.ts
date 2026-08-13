import { Prisma } from "../generated/prisma/client.js";

export type UserWithPosts = Prisma.UserGetPayload<{
	include: { posts: true }
}>;
