import { Router } from "express";
import { getSessions, postSession } from "../controllers/session.js";

const sessionRouter = Router();

sessionRouter.route("/session").get(getSessions).post(postSession);

export { sessionRouter };
