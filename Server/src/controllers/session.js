import { Session } from "../database/models/session.js";

export const postSession = async (req, res) => {
  try {
    const { unit, class: classType } = req.body;

    if (!unit || !classType) {
      return res.status(400).json({
        success: false,
        message: "Unit and Class are required",
      });
    }

    const sessionData = { unit, class: classType };
    const newSession = await Session.create(sessionData);

    res.status(201).json({
      success: true,
      message: "Session created successfully",
      data: newSession,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to add session due to server error",
    });
  }
};
