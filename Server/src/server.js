import express from "express";
import cors from "cors";

import { getHome } from "./controllers/home.js";

import { connectDB } from "./database/config.js";
import { userRouter } from "./routes/userRoute.js";
import { buildingRouter } from "./routes/buildingRoute.js";
import { courseRouter } from "./routes/courseRouter.js";
import { unitRouter } from "./routes/unitRouter.js";
import { classRouter } from "./routes/classRouter.js";
import { courseUnitRouter } from "./routes/courseUnitRoute.js";
import { userCourseRouter } from "./routes/userCourseRoute.js";
import { userUnitRouter } from "./routes/userUnitRoute.js";
import { authRouter } from "./routes/auth.js";

const app = express();

//middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Your Vite frontend URL
    credentials: true, // If you're using cookies/authentication
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

//connect to database
connectDB();

//port
const PORT = process.env.PORT;

//home route
app.get("/", getHome);

//routing
app.use(
  "/api",
  authRouter,
  userRouter,
  buildingRouter,
  courseRouter,
  courseUnitRouter,
  userCourseRouter,
  userUnitRouter,
  unitRouter,
  classRouter
);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
