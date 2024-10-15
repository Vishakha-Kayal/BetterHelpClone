import { Blog } from "../models/blog.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().populate("author", "-password");
  if (blogs.length === 0) {
    throw new ApiError(404, "No blogs found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, blogs, "Data fetched successfully."));
});

const getBLogWithTitle = asyncHandler(async (req, res) => {
  const { title } = req.params;
  const decodedTitle = decodeURIComponent(title.split("_").join(" "));
  const blog = await Blog.findOne({ title: { $regex: new RegExp(decodedTitle, 'i') } }); 


  if (!blog) {
    throw new ApiError(404, "No blogs found with this title ");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, blog, "Data fetched successfully."));
});
export { getAllBlogs, getBLogWithTitle };
