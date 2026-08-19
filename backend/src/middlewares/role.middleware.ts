import { type Response, type NextFunction } from "express";
import { AuthenticatedRequest } from "./auth.middleware.js";

export const authorize = (...roles: string[]) => { 
	return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => { 
		if (!req.user) {
			res.status(401).json({
				message: "User not authenticated",
			})
			return;
		}

		if (!roles.includes(req.user.role)) { 
			res.status(403).json({
				message: "Unauthorized: You do not have permission to access this resource",
			})
			return;
		}

		next();
	}
}