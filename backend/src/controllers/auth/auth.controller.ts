import type { Request, Response } from "express";
import { loginUser, registerUser } from "../../services/auth.service.js";
import { HttpError } from "../../utils/http-error.js";
import type { LoginInput, RegisterInput } from "../../types/user.types.js";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const input: RegisterInput = req.body;
    const result = await registerUser(input);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Registration failed";
    res.status(400).json({ success: false, message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const input: LoginInput = req.body;
    const result = await loginUser(input);
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Login failed";
    res.status(400).json({ success: false, message });
  }
};
