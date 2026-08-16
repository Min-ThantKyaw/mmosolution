import type { Request, Response } from "express";
import { loginUser, registerUser } from "../../services/auth.service.js";
import { HttpError } from "../../utils/http-error.js";
import type { LoginInput, RegisterInput } from "../../types/user.types.js";

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

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const input: LoginInput = req.body;
    const result = await loginUser(input);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.status).json({ error: { message: error.message, code: error.code } });
      return;
    }
    console.error("Login failed:", error);
    res.status(500).json({ error: { message: "Login failed", code: "INTERNAL" } });
  }
};
