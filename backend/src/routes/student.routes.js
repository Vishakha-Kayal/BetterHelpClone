import { Router } from "express";
import { registerStudent, loginStudent } from "../controllers/student.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadStudentFiles } from "../utils/cloudinary.js";
const router = Router();

router.route("/register").post(upload.fields([
    { name: "identityCard", maxCount: 1 },
    { name: "studentPhoto", maxCount: 1 }
]),
    uploadStudentFiles,
    registerStudent);

router.route('/login').post(loginStudent)

export default router;
