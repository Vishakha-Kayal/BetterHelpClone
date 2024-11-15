import { Group } from "../models/group.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";
import { Review } from "../models/review.models.js";
import { Member } from "../models/member.models.js";
import jwt from "jsonwebtoken"

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
  const { createdBy,content,group} = req.body;

  try {
    const reviewObj = new Review({
      createdBy,
      content,
      group,
      likes: [],
      disLikes: [],
      comments:[]
    });

    const savedReview = await reviewObj.save();

    res.status(201).json({
      success: true,
      data: savedReview,
      message: `Review created by ${createdBy} successfully`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create review",
      error: error.message,
    });
  }
});

const getReviews=asyncHandler(async(req,res)=>{
  const reviews=await Review.find();
  if(reviews.length==0){
    throw new ApiError(404,"no reviews found on this group.")
  }
  res.json({
    reviews:reviews
  })
})

const addMembers = asyncHandler(async (req, res) => {
  const { userId, userType, groupId } = req.body;

  // Validate groupId
  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    return res.status(400).json({ message: "Invalid group ID" });
  }

  // Capitalize first letter for enum matching
  const formattedUserType = userType.charAt(0).toUpperCase() + userType.slice(1);

  try {
    // Check if the user is already a member of the group
    const existingMember = await Member.findOne({
      group: groupId,
      'member.userId': userId
    });

    if (existingMember) {
      return res.status(400).json({ message: "User is already a member" });
    }

    // Create a new member
    const member = new Member({
      member: [
        {
          userId: new mongoose.Types.ObjectId(userId),
          userType: formattedUserType,
        },
      ],
      group: groupId,
    });

    const savedMember = await member.save();
    if (savedMember) {
      const group = await Group.findById(groupId);
      group.members.push(member._id);
      await group.save();
      const memberToken = jwt.sign(
        { _id: member._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "5h" }
      );
      console.log(memberToken)
      res.status(200).json({success:true,memberToken:memberToken})
    } else {
      res.status(500).json({ success: false, message: "Failed to save member" });
    }
  } catch (error) {
    console.error("Error creating member:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create member",
      error: error.message,
    });
  }
});


export { getGroups, editGroup, addReview,getReviews, addMembers };
