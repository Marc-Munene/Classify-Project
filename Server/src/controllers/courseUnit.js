import { CourseUnit } from "../database/models/courseUnit.js";

export const postCourseUnits = async (req, res) => {
  try {
    const { course, unit } = req.body;

    if (!course || !unit) {
      return res.status(400).json({
        success: false,
        message: "Course and Unit are required",
      });
    }

    const courseUnitData = { course, unit };

    const courseUnit = await CourseUnit.create(courseUnitData);

    res.status(201).json({
      success: true,
      data: courseUnit,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to add course unit",
    });
  }
};

//get all courses
export const getCourseUnits = async (req, res) => {
  try {
    const courses = await CourseUnit.find().populate("course unit");

    if (!courses) {
      return res.status(404).json({
        success: false,
        message: "No courses found",
      });
    }

    res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get courses",
    });
  }
};

//Get single course
export const getSingleCourse = async (req, res) => {
  try {
    const courseId = req.query.id;

    const course = await CourseUnit.findById(courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get course",
    });
  }
};

//edit course unit
export const editCourseUnit = async (req, res) => {
  try {
    const { course, unit } = req.body;

    if (!course || !unit) {
      return res.status(400).json({
        success: false,
        message: "Course and Unit are required",
      });
    }
    const courseUnitId = req.query.id;
    // Find the course unit by ID and update it

    const courseUnit = await CourseUnit.findByIdAndUpdate(
      { _id: courseUnitId },
      req.body,
      { new: true }
    );

    if (!courseUnit) {
      return res.status(404).json({
        success: false,
        message: "Course Unit not found",
      });
    }

    res.status(200).json({
      success: true,
      data: courseUnit,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to update course unit",
    });
  }
};

//delete course unit
export const deleteCourseUnit = async (req, res) => {
  try {
    const courseUnitId = req.query.id;

    const deletedCourseUnit = await CourseUnit.deleteOne({ _id: courseUnitId });

    if (deletedCourseUnit.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Course Unit not found",
      });
    }

    res.status(200).json({
      success: true,
      deletedCount: deletedCourseUnit.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete course unit",
    });
  }
};
