import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: { type: String, enum: ["question", "answer"], required: true },
      text: {
        type: String,
        required: true,
      },
    },
    takeaway: {
        type: String,
        required: false 
    },
    category: {
      type: String,
      enum:['friends','therapy','stress management','anxiety','general','willpower','depression','current events','adhd','abuse','ambition'],
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
