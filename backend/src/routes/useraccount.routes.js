import { Router } from "express";
import {updateEmail,updatePassword} from "../controllers/useraccount.controller.js"
const router = Router();

router.route("/email").post(updateEmail)
router.route("/password").post(updatePassword)

export default router;