import mongoose, { Schema } from "mongoose";

const userTypeRef = "createdBy.userType";

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: userTypeRef,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: userTypeRef
  }],
  disLikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: userTypeRef
  }]
});

const reviewSchema = new Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: userTypeRef
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
    ref: userTypeRef
  }],
  disLikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: userTypeRef
  }],
  comments: [commentSchema]
}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);