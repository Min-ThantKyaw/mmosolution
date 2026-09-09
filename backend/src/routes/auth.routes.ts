import { Router } from "express";
import { register, login } from "../controllers/auth/auth.controller.js";

const authRouter: Router = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
// TODO: login, forgot-password, reset-password, logout, me

export default authRouter;
