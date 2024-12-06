import { asyncHandler } from "../utils/asyncHandler.js";
import { Farmer } from "../models/farmer.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

const registerFarmer = asyncHandler(async (req, res) => {
  const { fullName, aadharNumber, phoneNumber, password } = req.body;

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

  const newFarmer = new Farmer({
    fullName,
    aadharNumber,
    phoneNumber,
    password,
    identityCard: identityCardUrl,
    profileImage: farmerPhotoUrl,
  });

  try {
    await newFarmer.save();
    return res
      .status(201)
      .json(new ApiResponse(201, newFarmer, "Farmer registered successfully"));
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res
        .status(400)
        .json(
          new ApiResponse(
            400,
            null,
            "A farmer with this Aadhar number already exists."
          )
        );
    }
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          null,
          "An error occurred while registering the farmer."
        )
      );
  }
});

const loginFarmer = asyncHandler(async (req, res) => {
  const { aadharNumber, phoneNumber, password } = req.body;
  console.log("request.body = ", req.body);
  const farmerExists = await Farmer.findOne({
    $or: [{ aadharNumber }, { phoneNumber }],
  });

  if (farmerExists) {
    const isMatch = await farmerExists.isPasswordCorrect(password);
    if (isMatch) {
      const token = jwt.sign(
        {
          _id: farmerExists._id,
          fullName: farmerExists.fullName,
          profileImage: farmerExists.profileImage,
          addReminder: farmerExists.addReminder,
          paymentStatus: farmerExists.paymentStatus,
          notifications: farmerExists.notifications
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "5h" }
      );
      const { password, ...farmerData } = farmerExists.toObject();
      return res.json({ success: true, token, farmer: farmerData });
    } else {
      return res.json({ success: false });
    }
  }
  return res.json({ message: "Farmer does not exist" });
});

export { registerFarmer, loginFarmer };
