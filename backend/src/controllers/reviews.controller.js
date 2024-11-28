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
            disLikes: [],
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
const likeReview = asyncHandler(async (req, res) => {
    const { userId, userType, reviewId } = req.body;
    console.log(req.body);

    try {
        const review = await Review.findById(reviewId);
        console.log(review);

        if (!review) {
            throw new ApiError(500, "Cannot find review");
        }

        // Ensure userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: "Invalid user ID" });
        }

        // Check if the user has already liked the review
        const hasLiked = review.likes.some(like => like.equals(userId));
        if (hasLiked) {
            // Remove the user from likes
            review.likes = review.likes.filter(like => !like.equals(userId));
        } else {
            // Add the user to likes
            review.likes.push(new mongoose.Types.ObjectId(userId));
            review.likesModel = userType;
            // Remove the user from dislikes if they had disliked
            review.disLikes = review.disLikes.filter(dislike => !dislike.equals(userId));
        }

        await review.save();

        res.json({ review: review, success: true });
    } catch (error) {
        console.error("Error liking review:", error);
        res.status(500).json({ success: false, message: "Failed to like review" });
    }
});

const dislikeReview = asyncHandler(async (req, res) => {
    const { userId, userType, reviewId } = req.body;
    console.log(req.body);

    try {
        const review = await Review.findById(reviewId);
        console.log(review);

        if (!review) {
            throw new ApiError(500, "Cannot find review");
        }

        // Ensure userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: "Invalid user ID" });
        }

        // Check if the user has already disliked the review
        const hasDisliked = review.disLikes.some(dislike => dislike.equals(userId));
        if (hasDisliked) {
            // Remove the user from dislikes
            review.disLikes = review.disLikes.filter(dislike => !dislike.equals(userId));
        } else {
            // Add the user to dislikes
            review.disLikes.push(new mongoose.Types.ObjectId(userId));
            review.disLikesModel = userType;
            // Remove the user from likes if they had liked
            review.likes = review.likes.filter(like => !like.equals(userId));
        }

        await review.save();

        res.json({ review: review, success: true });
    } catch (error) {
        console.error("Error disliking review:", error);
        res.status(500).json({ success: false, message: "Failed to dislike review" });
    }
});
const likeComment = asyncHandler(async (req, res) => {
    const { userId, userType, reviewId, commentId } = req.body;
    console.log(req.body);

    try {
        // Find the review by ID
        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ success: false, message: "Review not found" });
        }

        // Find the comment within the review
        const comment = review.comments.id(commentId);
        if (!comment) {
            return res.status(404).json({ success: false, message: "Comment not found" });
        }

        // Ensure userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: "Invalid user ID" });
        }

        // Check if the user has already liked the comment
        const hasLiked = comment.likes.some(like => like.equals(userId));
        if (hasLiked) {
            // Remove the user from likes
            comment.likes = comment.likes.filter(like => !like.equals(userId));
        } else {
            // Add the user to likes
            comment.likes.push(new mongoose.Types.ObjectId(userId));
            comment.likesModel = userType;
            // Remove the user from dislikes if they had disliked
            comment.disLikes = comment.disLikes.filter(dislike => !dislike.equals(userId));
        }

        // Save the review with the updated comment
        await review.save();

        res.json({ comment: comment, success: true });
    } catch (error) {
        console.error("Error liking comment:", error);
        res.status(500).json({ success: false, message: "Failed to like comment" });
    }
});

const dislikeComment = asyncHandler(async (req, res) => {
    const { userId, userType, reviewId, commentId } = req.body;
    console.log(req.body);

    try {
        // Find the review by ID
        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ success: false, message: "Review not found" });
        }

        // Find the comment within the review
        const comment = review.comments.id(commentId);
        if (!comment) {
            return res.status(404).json({ success: false, message: "Comment not found" });
        }

        // Ensure userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: "Invalid user ID" });
        }

        // Check if the user has already disliked the comment
        const hasDisliked = comment.disLikes.some(dislike => dislike.equals(userId));
        if (hasDisliked) {
            // Remove the user from dislikes
            comment.disLikes = comment.disLikes.filter(dislike => !dislike.equals(userId));
        } else {
            // Add the user to dislikes
            comment.disLikes.push(new mongoose.Types.ObjectId(userId));
            comment.disLikesModel = userType;
            // Remove the user from likes if they had liked
            comment.likes = comment.likes.filter(like => !like.equals(userId));
        }

        // Save the review with the updated comment
        await review.save();

        res.json({ comment: comment, success: true });
    } catch (error) {
        console.error("Error disliking comment:", error);
        res.status(500).json({ success: false, message: "Failed to dislike comment" });
    }
});

const getReviews = asyncHandler(async (req, res) => {
    const reviews = await Review.find().populate('createdBy comments.createdBy');
    if (reviews.length == 0) {
        throw new ApiError(404, "no reviews found on this group.")
    }
    res.json({
        reviews: reviews
    })
})




export {
    addComments, getComments, addReview, getReviews, likeReview, dislikeReview, dislikeComment, likeComment
}