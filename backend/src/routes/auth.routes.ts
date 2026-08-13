import { Router } from "express";
import { register } from "../controllers/auth/auth.controller.js";

const router = Router();

router.post("/register", register);
// TODO: login, forgot-password, reset-password, logout, me

export default router;
