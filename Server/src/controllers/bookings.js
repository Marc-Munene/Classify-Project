import { Booking } from "../database/models/bookings.js";

export const addBookings = async (req, res) => {
  try {
    const { userId, classId, unit, timeStart, timeEnd } = req.body;

    // Validate input
    if (!userId || !classId || !unit || !timeStart || !timeEnd) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new booking
    const newBooking = await Booking.create({
      userId,
      classId,
      unit,
      timeStart,
      timeEnd,
    });

    //handle class status to changed to booked
    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: newBooking,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
