import { Router } from "express";
import { register, login } from "../controllers/auth/auth.controller.js";

const authRouter: Router = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter .post("/test-route", (req, res) => { 
	return res.status(200).json({ message: "Test route is working!" });
});
// TODO: login, forgot-password, reset-password, logout, me

export default authRouter;
