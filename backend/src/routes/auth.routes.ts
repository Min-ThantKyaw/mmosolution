import { Router } from "express";
import { register, login } from "../controllers/auth/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/test-route", (req, res) => { 
	return res.status(200).json({ message: "Test route is working!" });
});
// TODO: login, forgot-password, reset-password, logout, me

export default router;
