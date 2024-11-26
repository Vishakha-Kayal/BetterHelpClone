import { getGroups,editGroup,addReview,addMembers ,getReviews,addComments, getComments} from "../controllers/groups.controller.js";
import {Router} from 'express';
const router=Router();

router.route("/").get(getGroups)
router.route("/:id").put(editGroup)
router.route("/review").post(addReview)
router.route("/review").get(getReviews)
router.route("/members").post(addMembers)
router.route("/reviews/comments").post(addComments)
router.route('/reviews/fetchComments').post(getComments)

export default router;