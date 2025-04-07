import { Session } from "../database/models/session.js";

//add sessions
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

//get all sessions
export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate("unit class");

    if (!sessions) {
      return res.status(404).json({
        success: false,
        message: "No sessions found",
      });
    }

    res.status(200).json({
      success: true,
      data: sessions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get sessions",
    });
  }
};
