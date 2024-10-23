import { Router } from "express";
import { registerUser,loginUser,checkUser,editUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/register").post(upload.single("profileImage"), registerUser);
router.route("/login").post(loginUser);
router.route("/resetPsswd").post(checkUser);
router.route("/changePsswd").post(editUser);


export default router;
