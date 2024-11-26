import { User } from "../models/user.models.js"
import { Farmer } from "../models/farmer.models.js"
import { Student } from "../models/student.models.js";
import { Group } from "../models/group.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";
import { Review } from "../models/review.models.js";



const addComments = asyncHandler(async (req, res) => {
    const { reviewId, content, createdBy, createdByModel } = req.body;
    try {
        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        review.comments.push({
            content,
            createdBy,
            createdByModel,
            likesModel: createdByModel,
            disLikesModel: createdByModel
        });

        await review.save();

        res.status(200).json({ success: true, review });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

const getComments = asyncHandler(async (req, res) => {
    try {
        const { reviewId } = req.body;
        const review = await Review.findById(reviewId).populate('comments.createdBy');
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json({ success: true, comments: review.comments });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

const addReview = asyncHandler(async (req, res) => {
    const { createdBy, userType, content, groupId } = req.body;

    // Validate input
    if (!mongoose.Types.ObjectId.isValid(groupId)) {
        return res.status(400).json({ message: "Invalid group ID" });
    }
    if (!content || typeof content !== 'string') {
        return res.status(400).json({ message: "Content is required and must be a string" });
    }
    const formattedUserType = userType.charAt(0).toUpperCase() + userType.slice(1);

    try {
        // Check if the group exists
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }

        // Create a new review
        const review = new Review({
            createdBy,
            createdByModel: formattedUserType,
            content,
            group: groupId,
            likes: [],
            likesModel: formattedUserType,
            disLikes: [],
            disLikesModel: formattedUserType,
            comments: []
        });
        await review.save();

        res.status(201).json({ success: true, review });
    } catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add review",
            error: error.message,
        });
    }
});

const getReviews = asyncHandler(async (req, res) => {
    const reviews = await Review.find().populate('createdBy');
    if (reviews.length == 0) {
        throw new ApiError(404, "no reviews found on this group.")
    }
    res.json({
        reviews: reviews
    })
})

export {
    addComments, getComments, addReview, getReviews
}