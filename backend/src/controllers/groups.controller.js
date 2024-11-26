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
  console.log(updateData)
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


const addMembers = asyncHandler(async (req, res) => {
  const { userId, userType, groupId } = req.body;
  console.log("Received userType:", userType);
  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    return res.status(400).json({ message: "Invalid group ID" });
  }

  const formattedUserType = userType?.charAt(0).toUpperCase() + userType?.slice(1);
  const group = await Group.findById(groupId);
  if (!group) {
    throw new ApiError(400, "Group does not exist");
  }

  if (group.members.some(member => member.refId === userId)) {
    throw new ApiError(400,"User already is a member");
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
const getMembers = asyncHandler(async (req, res) => {
  const { groupId } = req.body;

  try {
    const group = await Group.findById(groupId).select('members');
    if (!group) {
      return res.status(404).json({ success: false, message: "Group not found" });
    }

    // Map refType to the corresponding model
    const modelMap = {
      User: User,
      Student: Student,
      Farmer: Farmer
    };

    // Fetch all members concurrently
    const populatedMembers = await Promise.all(
      group.members.map(async (member) => {
        const Model = modelMap[member.refType];
        if (!Model) {
          throw new Error(`Model not found for refType: ${member.refType}`);
        }
        const populatedMember = await Model.findById(member.refId).select('profileImage'); // Adjust fields as needed
        return {
          ...member.toObject(),
          refId: populatedMember
        };
      })
    );

    res.json({ success: true, members: populatedMembers });
  } catch (error) {
    console.error("Error fetching members:", error);
    res.status(500).json({ success: false, message: "Failed to fetch members" });
  }
});

export { getGroups, editGroup, addMembers,getMembers };
