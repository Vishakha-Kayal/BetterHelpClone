import { Router } from "express";
import {
  adminregister,
  adminLogin,
  createBlog,
} from "../controllers/admin.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { adminAuth } from "../middlewares/adminAuth.middleware.js";
const router = Router();

router.post("/register", adminregister);
router.post("/login", adminLogin);
router.post("/createBlog", adminAuth, upload.single("thumbnail"), createBlog);

export default router;
