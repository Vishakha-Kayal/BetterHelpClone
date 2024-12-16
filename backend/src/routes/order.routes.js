import { Router } from "express"
import { createOrder, verifyOrder } from "../controllers/order.controller.js";
const router = Router();

router.route("/").post(createOrder)
router.route('/verify').post(verifyOrder)
export default router;