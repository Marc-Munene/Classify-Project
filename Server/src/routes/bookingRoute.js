import { Router } from "express";
import { addBookings } from "../controllers/bookings.js";

const bookingRouter = Router();

bookingRouter.route("/bookings").post(addBookings);

export { bookingRouter };
