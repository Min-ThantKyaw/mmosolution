import { Router } from "express";

const adminRouter: Router = Router();

adminRouter.get("/dashboard", (req, res) => { 
	return res.status(200).json({ message: "Admin dashboard is working!" });
});

export default adminRouter;