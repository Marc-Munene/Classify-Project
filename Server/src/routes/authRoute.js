import { Router } from "express";
import { login } from "../controllers/auth.js";

const authRouter = Router();

authRouter.post("/auth/login", login);

export { authRouter };
