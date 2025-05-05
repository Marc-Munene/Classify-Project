import { Router } from "express";
import { addBookings, getBookings } from "../controllers/bookings.js";

const bookingRouter = Router();

bookingRouter.route("/bookings").post(addBookings).get(getBookings);

export { bookingRouter };
