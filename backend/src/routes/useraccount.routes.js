import { Router } from "express";
import {updateEmail,updatePassword,updateNotificationSettings} from "../controllers/useraccount.controller.js"
const router = Router();

router.route("/email").post(updateEmail)
router.route("/password").post(updatePassword)
router.route("/notifications").post(updateNotificationSettings)

export default router;