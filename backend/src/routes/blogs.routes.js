import { Router } from "express";
import { getAllBlogs, getBLogWithTitle } from "../controllers/blogs.controllers.js";
const router = Router();

router.get("/blogs", getAllBlogs);
router.get("/blog/:title", getBLogWithTitle);

export default router;
