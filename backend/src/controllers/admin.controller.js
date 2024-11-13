import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/admin.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadFileOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import { Blog } from "../models/blog.models.js";
import {Group} from "../models/group.models.js"

const adminregister = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || email.trim() === "" || password.trim() === "") {
    throw new ApiError(400, "email or password is required");
  }

  const admin = await Admin.findOne({ email });
  if (admin) {
    throw new ApiError(409, "Admin already exists");
  }

  const newAdmin = await Admin.create({
    email: email.toLowerCase(),
    password,
  });

  await newAdmin.save();
  const createdAdmin = await Admin.findById(newAdmin._id);
  if (!createdAdmin) {
    throw new ApiError(500, "Something went wrong while registering the admin");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdAdmin, "Admin created successfully."));
});

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isPasswordValid = await admin.isPasswordCorrect(password);
  if (!isPasswordValid) {
    return ApiError(401, "Invalid email or password");
  }
  const token = jwt.sign(
    { _id: admin._id, email: admin.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" } // Token expiration time
  );

  return res.status(200).json({ token, success: true });
});

const createBlog = asyncHandler(async (req, res) => {
  console.log("create blog route hit");
  const { title, category, question, answer, takeaway, content } = req.body;
  const adminId = req.user._id;
  if (!title || !category || !answer || !question) {
    throw new ApiError(
      400,
      "All fields are required: title, thumbnail, content, and category."
    );
  }

  const profileLocalPath = req.file?.path;
  if (!profileLocalPath) {
    throw new ApiError(400, "profile image is not found.");
  }

  const thumbnail = await uploadFileOnCloudinary(profileLocalPath);
  const newBlog = await Blog.create({
    title,
    question,
    answer,
    content,
    takeaway,
    category,
    thumbnail: thumbnail.url,
    author: adminId,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, newBlog, "Blog created successfully."));
});

const createGroup = asyncHandler(async (req, res) => {
  if (!req.user) {
    console.log("Access denied.");

    return res.status(403).json({ message: "Access denied." });
  }
  const {
    title,
    groupDescription,
    goals,
    groupFor,
    topics,
    groupFocus,
    whoCanJoin,
    meetingStructure,
    isPublic,
    image_url,
  } = req.body;

  // Validate required fields
  if (
    !title ||
    !groupDescription ||
    !goals ||
    !groupFor ||
    !topics ||
    !meetingStructure ||
    !image_url
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Create a new group instance
  const newGroup = new Group({
    title,
    groupDescription,
    goals,
    groupFor,
    topics,
    groupFocus,
    whoCanJoin,
    meetingStructure,
    isPublic,
    image_url,
    createdBy: req.user._id, // Assuming you have user authentication and req.user is set
  });

  try {
    // Save the group to the database
    const savedGroup = await newGroup.save();
    res.status(201).json(savedGroup); // Respond with the created group
  } catch (error) {
    console.error("Error creating group:", error);
    res
      .status(500)
      .json({ message: "Failed to create group", error: error.message });
  }
});

export { adminregister, adminLogin, createBlog, createGroup };
