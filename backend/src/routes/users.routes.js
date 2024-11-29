import { Router } from "express";
import { registerUser,loginUser,checkUser,editUser ,toggleAccess,getAllUsers,setVisibilty,getVisibility} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/register").post(upload.single("profileImage"), registerUser);
router.route("/login").post(loginUser);
router.route("/resetPsswd").post(checkUser);
router.route("/changePsswd").post(editUser);
router.route("/toggleAccess").post(toggleAccess);
router.route("/").get(getAllUsers);
router.route("/getVisibility").get(getVisibility)
router.route("/setVisibilty").post(setVisibilty)

export default router;
