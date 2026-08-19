import express, { type Express } from "express";
import "dotenv/config";
import authRouter from "./routes/auth.routes.js";
import adminRouter from "./routes/admin.routes.js";
import { authenticate } from "./middlewares/auth.middleware.js";
import { authorize } from "./middlewares/role.middleware.js";

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const host: string = process.env.HOST || "localhost";

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin", authenticate, authorize("READER"), adminRouter);

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
