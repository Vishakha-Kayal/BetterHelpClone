import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    createdBy: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Member"
    },
    content: {
      type: String,
      required: true,
    },
    group:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Group'
  }  ,
    likes: [{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Member"
    }],
    disLikes: [{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Member"
    }],
    comments: [{
      content: {
        type: String,
        required: true,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
      }],
      disLikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
      }]
    }]
  },
  { timestamps: true }
);

export const Review = mongoose.model("Review", reviewSchema);