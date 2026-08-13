import { Router } from "express";

const router = Router();
// const authController = new AuthController()

router.post('/register');
router.post('/login');
router.post('/forgot-password');
router.post('/reset-password');
router.post('/logout');
router.get('/me'); // get current login user info