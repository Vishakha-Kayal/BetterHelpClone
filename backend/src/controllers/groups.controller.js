import { Group } from "../models/group.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";
import { Review } from "../models/review.models.js";
import { User } from "../models/user.models.js"
import { Farmer } from "../models/farmer.models.js"
import { Student } from "../models/student.models.js";

const getGroups = asyncHandler(async (req, res) => {
  const group = await Group.find();
  if (group.length == 0) {
    throw new ApiError(404, "no groups found");
  }
  res.json({ groups: group });
});

const editGroup = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid group ID" });
  }

  const group = await Group.findById(id);

  if (!group) {
    return res.status(404).json({ message: "Group not found" });
  }

  Object.keys(updateData).forEach(key => {
    if (updateData[key] !== undefined) {
      group[key] = updateData[key];
    }
  });

  const updatedGroup = await group.save();
  res.status(200).json(updatedGroup);
});

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
      createdBy: {
        _id: createdBy,
        ref: formattedUserType
      },
      content,
      group: groupId,
      likes: [],
      disLikes: [],
      comments: []
    });

    // Save the review
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
  const reviews = await Review.find();
  if (reviews.length == 0) {
    throw new ApiError(404, "no reviews found on this group.")
  }
  res.json({
    reviews: reviews
  })
})

const addMembers = asyncHandler(async (req, res) => {
  const { userId, userType, groupId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    return res.status(400).json({ message: "Invalid group ID" });
  }

  const formattedUserType = userType.charAt(0).toUpperCase() + userType.slice(1);
  const group = await Group.findById(groupId);
  if (!group) {
    throw new ApiError(400, "Group does not exist");
  }

  if (group.members.some(member => member.refId === userId)) {
    throw new ApiError("User already is a member");
  }

  try {
    const modelMap = {
      User: User,
      Farmer: Farmer,
      Student: Student
    };

    const Model = modelMap[formattedUserType];
    if (!Model) {
      throw new ApiError(500, "Invalid user type");
    }

    const user = await Model.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    user.groupJoined.push(groupId);
    await user.save();

    group.members.push({ refId: userId, refType: formattedUserType });
    await group.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error creating member:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create member",
      error: error.message,
    });
  }
});


export { getGroups, editGroup, addReview, getReviews, addMembers };
