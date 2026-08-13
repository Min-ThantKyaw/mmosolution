import type { Request, Response } from "express";
import { registerUser } from "../../services/auth.service.js";
import type { RegisterInput } from "../../types/user.types.js";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const input: RegisterInput = req.body;
    const result = await registerUser(input);
    res.status(201).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Registration failed";
    res.status(400).json({ message });
  }
};
