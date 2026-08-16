import { Router } from "express";
import { register, login } from "../controllers/auth/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
// TODO: login, forgot-password, reset-password, logout, me

export default router;
