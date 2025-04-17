import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    classId: {
      type: Schema.Types.ObjectId,
      ref: "class",
      required: true,
    },
    unit: { type: String, required: true },
    timeStart: { type: String, required: true },
    timeEnd: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Booking = new model("booking", bookingSchema);
