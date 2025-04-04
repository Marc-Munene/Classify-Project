import { User } from "../database/models/user.js";

export const login = async (req, res) => {
  try {
    const { email, regNo } = req.body;

    if (!email || !regNo) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const user = await User.findOne({ email, regNo });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    return res.json({
      success: true,
      message: "Login successful",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "something went wrong" });
  }
};
