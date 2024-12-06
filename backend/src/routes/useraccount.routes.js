import { Router } from "express";
import { updateEmail, updatePassword, updateNotificationSettings, updateReminder, updateProfilePhoto } from "../controllers/useraccount.controller.js"
const router = Router();
import { upload } from "../middlewares/multer.middleware.js";

router.route("/email").post(updateEmail)
router.route("/password").post(updatePassword)
router.route("/notifications").post(updateNotificationSettings)
router.route("/reminder").post(updateReminder)
router.route("/profilePhoto").post(upload.single("profileImage"), updateProfilePhoto)

export default router;