import { User } from "../models/user.models.js";
import { Farmer } from "../models/farmer.models.js";
import { Student } from "../models/student.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";

const updateEmail = asyncHandler(async (req, res) => {
    const { userId, userType, email } = req.body;
    if (!userId || !userType || !email) {
        throw new ApiError(400, "All fields are required");
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
    }
    // Map userType to the corresponding model
    const modelMap = {
        User: User,
        Farmer: Farmer,
        Student: Student
    };
    const Model = modelMap[userType];
    if (!Model) {
        throw new ApiError(500, "Invalid user type");
    }

    // Find the user by ID
    const user = await Model.findById(userId);
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // Update the user's email
    user.email = email;
    await user.save();

    // Respond with success message
    res.status(200).json({ success: true, message: "Email updated successfully" });
});

const updatePassword = asyncHandler(async (req, res) => {
    const { userId, userType, password } = req.body;
    if (!userId || !userType || !password) {
        throw new ApiError(400, "All fields are required");
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
    }
})

export {
    updateEmail, updatePassword
}