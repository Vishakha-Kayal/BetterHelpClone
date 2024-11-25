import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "createdBy.userType"
    },
    content: {
      type: String,
      required: true,
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group'
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "createdBy.userType"
    }],
    disLikes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "createdBy.userType"
    }],
    comments: [{
      content: {
        type: String,
        required: true,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "createdBy.userType",
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "createdBy.userType"
      }],
      disLikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "createdBy.userType"
      }]
    }]
  },
  { timestamps: true }
);

export const Review = mongoose.model("Review", reviewSchema);
