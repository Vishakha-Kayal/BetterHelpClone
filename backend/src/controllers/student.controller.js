import { Student } from "../models/student.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"


const registerStudent = asyncHandler(async (req, res) => {
  const { fullName, aadharNumber, phoneNumber, password } = req.body;

  if (!fullName || !aadharNumber || !phoneNumber || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const student = await Student.findOne({ aadharNumber });
  if (student) {
    return res
      .status(400)
      .json(
        new ApiResponse(
          400,
          null,
          "A student with this Aadhar number already exists."
        )
      );
  }
  console.log("student", student);

  const uploadedFiles = req.uploadedFiles || [];
  const identityCardFile = uploadedFiles.find(
    file =>
      file?.public_id &&
      req.files.identityCard[0].originalname ===
      `${file.original_filename}.${file.format}`
  );
  const studentPhotoFile = uploadedFiles.find(
    file =>
      file?.public_id &&
      req.files.studentPhoto[0].originalname ===
      `${file.original_filename}.${file.format}`
  );

  const identityCardUrl = identityCardFile ? identityCardFile.secure_url : null;
  const studentPhotoUrl = studentPhotoFile ? studentPhotoFile.secure_url : null;
  console.log(
    "student route hit",
    "identityCardUrl",
    identityCardUrl,
    "studentPhotoUrl",
    studentPhotoUrl
  );

  const newStudent = new Student({
    fullName,
    aadharNumber,
    phoneNumber,
    password,
    identityCard: identityCardUrl,
    profileImage: studentPhotoUrl,
  });

  try {
    await newStudent.save();
    return res
      .status(201)
      .json(
        new ApiResponse(201, newStudent, "Student registered successfully")
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          null,
          "An error occurred while registering the student."
        )
      );
  }
});

const loginStudent = asyncHandler(async (req, res) => {
  const { aadharNumber, phoneNumber, password } = req.body;
  console.log("request.body = ", req.body);
  const studentExists = await Student.findOne({
    $or: [{ aadharNumber }, { phoneNumber }],
  });

  if (studentExists) {
    const isMatch = await studentExists.isPasswordCorrect(password);
    if (isMatch) {
      const token = jwt.sign(
        {
          _id: studentExists._id, fullName: studentExists.fullName, profileImage: studentExists.profileImage, notifications: studentExists.notifications,
          paymentStatus: studentExists.paymentStatus,
          addReminder: studentExists.addReminder,
          appointments:studentExists.appointments
        },
        process.env.ACCESS_TOKEN_SECRET,
        // { expiresIn: "5h" }
      );
      const { password, ...studentData } = studentExists.toObject();
      return res.json({ success: true, token, student: studentData });
    } else {
      return res.json({ success: false });
    }
  }

  return res.json({ message: "Student does not exist" });
});

export { registerStudent, loginStudent };
