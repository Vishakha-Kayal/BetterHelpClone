import { Router } from "express"
import { registerDoctor } from "../controllers/doctors.controller.js"
import { uploadMultipleFiles } from "../utils/cloudinary.js";
import { upload } from "../middlewares/multer.middleware.js"
const router = Router();
router.route('/register').post(
    upload.fields([
        { name: "photo", maxCount: 1 },
        { name: "license", maxCount: 1 }
    ]),
    uploadMultipleFiles,
    registerDoctor
)


export default router;