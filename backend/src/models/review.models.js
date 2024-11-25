import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'comments.createdByModel',
    required: true,
  },
  createdByModel: {
    type: String,
    required: true,
    enum: ['User', 'Farmer', 'Student'], // List all possible models
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'comments.likesModel'
  }],
  likesModel: {
    type: String,
    required: true,
    enum: ['User', 'Farmer', 'Student'],
  },
  disLikes: [{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'comments.disLikesModel'
  }],
  disLikesModel: {
    type: String,
    required: true,
    enum: ['User', 'Farmer', 'Student'],
  }
});

const reviewSchema = new Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'createdByModel',
    required: true,
  },
  createdByModel: {
    type: String,
    required: true,
    enum: ['User', 'Farmer', 'Student'], 
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
    refPath: 'likesModel'
  }],
  likesModel: {
    type: String,
    required: true,
    enum: ['User', 'Farmer', 'Student'],
  },
  disLikes: [{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'disLikesModel'
  }],
  disLikesModel: {
    type: String,
    required: true,
    enum: ['User', 'Farmer', 'Student'],
  },
  comments: [commentSchema]
}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);