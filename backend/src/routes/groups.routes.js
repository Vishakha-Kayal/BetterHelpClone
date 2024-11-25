import { getGroups,editGroup,addReview,addMembers ,getReviews,addComments} from "../controllers/groups.controller.js";
import {Router} from 'express';
const router=Router();

router.route("/").get(getGroups)
router.route("/:id").put(editGroup)
router.route("/review").post(addReview)
router.route("/review").get(getReviews)
router.route("/members").post(addMembers)
router.route("/review/comments").post(addComments)

export default router;