import type { Request, Response } from "express";
import { loginUser, registerUser } from "../../services/auth.service.js";
import type { LoginInput, RegisterInput } from "../../types/user.types.js";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const input: RegisterInput = req.body;
    const { user, accessToken, refreshToken } = await registerUser(input);
    console.log("Refresh Token:", refreshToken); // Log the refresh token for debugging
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { user, accessToken }
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
