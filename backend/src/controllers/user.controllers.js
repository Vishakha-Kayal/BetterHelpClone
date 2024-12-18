import { uploadFileOnCloudinary } from "../utils/cloudinary.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { Farmer } from "../models/farmer.models.js";
import { Student } from "../models/student.models.js";

const generateRefreshAndAcessToken = async userId => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error generating tokens:", error); // Log the error
    throw new ApiError(
      500,
      "something went wrong while generating refresh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { email, phoneNumber, password } = req.body;
  if (!email || !password || email.trim() === "" || password.trim() === "") {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({ email });
  if (user) {
    throw new ApiError(409, "User with this email already exists.");
  }

  const profileLocalPath = req.file?.path;

  if (!profileLocalPath) {
    throw new ApiError(400, "profile image is not found.");
  }
  const profilePic = await uploadFileOnCloudinary(profileLocalPath);
  const newUser = await User.create({
    email: email.toLowerCase(),
    phoneNumber,
    password: password,
    profileImage: profilePic.url,
  });

  const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user.");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User created successfully."));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    throw new ApiError(400, "username and email is required");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "user does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { accessToken, refreshToken } = await generateRefreshAndAcessToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", options)
    .cookie("refreshToken", options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

const checkUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new ApiError(400, "Email is required");
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  } else {
    return res.json({ success: true });
  }
});

const editUser = asyncHandler(async (req, res) => {
  const { password, email } = req.body;
  if (!password) {
    throw new ApiError(400, "Password is required");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(500, "Internal server error");
  }
  user.password = password;
  await user.save()
  return res.json({ success: true })
});

const toggleAccess = asyncHandler(async (req, res) => { })

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password -refreshToken")
  return res.json(new ApiResponse(200, users, "Users fetched successfully"))
})

const setVisibilty = asyncHandler(async (req, res) => {
  const { userId, userType, isPrivate } = req.body;
  const modelMap = {
    User: User,
    Farmer: Farmer,
    Student: Student
  }
  const Model = modelMap[userType]
  if (!Model) {
    throw new ApiError(500, "Invalid user type")
  }
  const user = await Model.findById(userId)
  if (!user) {
    throw new ApiError(404, "User not found")
  }
  user.isPrivate = isPrivate
  await user.save()
  return res.json(new ApiResponse(200, user, "Visibility set successfully"))
})

const getVisibility = asyncHandler(async (req, res) => {
  const { userId, userType } = req.body;
  const modelMap = {
    User: User,
    Farmer: Farmer,
    Student: Student
  }
  const Model = modelMap[userType]
  if (!Model) {
    throw new ApiError(500, "Invalid user type")
  }
  const user = await Model.findById(userId)
  if (!user) {
    throw new ApiError(404, "User not found")
  }
  const isPrivate = user.isPrivate
  return res.json(new ApiResponse(200, isPrivate, "Visibility fetched successfully"))
})
export { registerUser, loginUser, checkUser, editUser, toggleAccess, getAllUsers, setVisibilty, getVisibility };
