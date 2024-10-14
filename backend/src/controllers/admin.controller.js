import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/admin.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadFileOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import { Blog } from "../models/blog.models.js";

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
  const { title, content, category } = req.body;
  const adminId = req.user._id;
  if (!title || !content || !category) {
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
    content,
    category,
    thumbnail: thumbnail.url,
    author: adminId,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, newBlog, "Blog created successfully."));
});

export { adminregister, adminLogin, createBlog };
