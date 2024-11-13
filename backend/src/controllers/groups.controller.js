import { Group } from "../models/group.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";

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

  // Validate ObjectId
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

export { getGroups, editGroup };
