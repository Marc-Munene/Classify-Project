import { Router } from "express";
import {
  deleteCourseUnit,
  editCourseUnit,
  getCourseUnits,
  postCourseUnits,
} from "../controllers/courseUnit.js";

const courseUnitRouter = Router();

courseUnitRouter
  .route("/courseUnits")
  .get(getCourseUnits)
  .post(postCourseUnits)
  .put(editCourseUnit)
  .delete(deleteCourseUnit);

export { courseUnitRouter };
