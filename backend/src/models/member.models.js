import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema(
  {
    member: [
      {
        _id:false,
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          refPath: "createdBy.userType",
        },
        userType: {
          type: String,
          required: true,
          enum: ["User", "Student", "Farmer"],
        },
      },
    ],
    group:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Group'
    }  
  },
  { timestamps: true }
);

export const Member = mongoose.model("Member", memberSchema);
