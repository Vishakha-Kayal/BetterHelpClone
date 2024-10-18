import { asyncHandler } from "../utils/asyncHandler.js";
import { Farmer } from "../models/farmer.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, aadharNumber, phoneNumber, password } = req.body;

  // Check if req.body is not empty and contains required fields
  if (!fullName || !aadharNumber || !phoneNumber || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const uploadedFiles = req.uploadedFiles || [];
  const identityCardFile = uploadedFiles.find(
    file =>
      file?.public_id &&
      req.files.identityCard[0].originalname ===
        `${file.original_filename}.${file.format}`
  );
  const farmerPhotoFile = uploadedFiles.find(
    file =>
      file?.public_id &&
      req.files.farmerPhoto[0].originalname ===
        `${file.original_filename}.${file.format}`
  );

  const identityCardUrl = identityCardFile ? identityCardFile.secure_url : null;
  const farmerPhotoUrl = farmerPhotoFile ? farmerPhotoFile.secure_url : null;

  console.log(
    "farmer route hit",
    "identityCardUrl",
    identityCardUrl,
    "farmerPhotoUrl",
    farmerPhotoUrl
  );

  // Create a new Farmer instance
  const newFarmer = new Farmer({
    fullName,
    aadharNumber,
    phoneNumber,
    password,
    identityCard: identityCardUrl, // Store the URL of the identity card
    farmerPhoto: farmerPhotoUrl, // Store the URL of the farmer photo
  });

  try {
    await newFarmer.save();
    return res.status(201).json(new ApiResponse(201, newFarmer, "Farmer registered successfully"));
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error
      return res.status(400).json(new ApiResponse(400, null, "A farmer with this Aadhar number already exists."));
    }
    return res.status(500).json(new ApiResponse(500, null, "An error occurred while registering the farmer."));
  }
});

const loginUser = asyncHandler(async () => {});

export { registerUser, loginUser };