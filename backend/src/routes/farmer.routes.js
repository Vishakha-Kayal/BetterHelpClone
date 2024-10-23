import { Router } from "express";
import {
  registerFarmer,
  loginFarmer,
} from "../controllers/farmer.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadMultipleFiles } from "../utils/cloudinary.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "identityCard", maxCount: 1 },
    { name: "farmerPhoto", maxCount: 1 },
  ]),
  uploadMultipleFiles,
  registerFarmer
);
router.route("/login").post(loginFarmer);

export default router;
