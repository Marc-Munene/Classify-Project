import { Router } from "express";
import { addBookings } from "../controllers/bookings";

const bookingRouter = Router();

bookingRouter.post(addBookings);

export { bookingRouter };
