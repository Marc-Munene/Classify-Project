import { Router } from "express";
import {
  addBuildings,
  deleteBuildings,
  editBuildings,
  getBuildings,
} from "../controllers/buildings.js";

const buildingRouter = Router();

buildingRouter
  .route("/buildings")
  .get(getBuildings)
  .post(addBuildings)
  .put(editBuildings)
  .delete(deleteBuildings);

export { buildingRouter };
