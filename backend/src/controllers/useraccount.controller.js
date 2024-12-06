import { User } from "../models/user.models.js";
import { Farmer } from "../models/farmer.models.js";
import { Student } from "../models/student.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose, { model } from "mongoose";
import { uploadFileOnCloudinary } from "../utils/cloudinary.js"

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

    // Validate input
    if (!userId || !userType || !password) {
        throw new ApiError(400, "All fields are required");
    }

    // Validate userId format
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

    // Update the user's password
    user.password = password; // Ensure password is hashed before saving
    await user.save();

    // Respond with success message
    res.status(200).json({ success: true, message: "Password updated successfully" });
});

const updateNotificationSettings = asyncHandler(async (req, res) => {
    const { userId, userType, messages } = req.body
    if (!userId || !userType || !messages) {
        throw new ApiError(400, "All fields are required");
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
    }
    const modelMap = {
        User: User,
        Farmer: Farmer,
        Student: Student
    }
    const Model = modelMap[userType]
    if (!Model) {
        throw new ApiError(500, "Invalid user type");
    }
    const user = await Model.findById(userId);
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // Update the user's notification settings
    user.notifications = {
        messagesFromTherapist: messages.messagesFromTherapist,
        liveSessionReminders: messages.liveSessionReminders
    };
    await user.save();

    // Respond with success message
    res.status(200).json({ success: true, message: "Notification settings updated successfully" });
})

const updateReminder = asyncHandler(async (req, res) => {
    const { userId, userType, addReminder } = req.body;
    if (!userId || !userType) {
        throw new ApiError(400, "All fields are required");
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
    }
    const modelMap = {
        User: User,
        Farmer: Farmer,
        Student: Student
    }
    const Model = modelMap[userType]
    if (!Model) {
        throw new ApiError(500, "Invalid user type");
    }
    const user = await Model.findById(userId)
    user.addReminder = addReminder
    await user.save()

    res.status(200).json({ success: true, message: "Reminder updated successfully" });

})
const updateProfilePhoto = asyncHandler(async (req, res) => {
    const { userId, userType } = req.body;
    const profileImage = req.file;
    console.log(req.body)
    console.log(req.file)
    if (!userId || !userType) {
        throw new ApiError(400, "All fields are required");
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
    }
    const modelMap = {
        User: User,
        Farmer: Farmer,
        Student: Student
    }
    const Model = modelMap[userType]
    if (!Model) {
        throw new ApiError(500, "Invalid user type");
    }
    const profileLocalPath = req?.file?.path
    if (!profileLocalPath) {
        throw new ApiError(400, "profle image is not found.")
    }
    const profilePic = await uploadFileOnCloudinary(profileLocalPath)
    console.log(profilePic.url)
    const user = await Model.findById(userId)
    user.profileImage = profilePic?.url
    await user.save()

    res.status(200).json({ success: true, message: "Image updated successfully" });

})

export {
    updateEmail, updatePassword, updateNotificationSettings, updateReminder, updateProfilePhoto
}