import { Router } from "express";
import { postSession } from "../controllers/session.js";

const sessionRouter = Router();

sessionRouter.route("/session").get().post(postSession);

export { sessionRouter };
