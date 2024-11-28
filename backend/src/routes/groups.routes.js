import { getGroups, editGroup, addMembers, getMembers } from "../controllers/groups.controller.js";
import { addReview, getReviews, addComments, getComments ,likeReview,dislikeReview,likeComment,dislikeComment} from "../controllers/reviews.controller.js";
import { Router } from 'express';
const router = Router();

router.route("/").get(getGroups)
router.route("/:id").put(editGroup)
router.route("/review").post(addReview)
router.route("/review/likes").post(likeReview)
router.route("/review/dislikes").post(dislikeReview)
router.route("/review/comment/likes").post(likeComment)
router.route("/review/comment/dislikes").post(dislikeComment)
router.route("/review").get(getReviews)
router.route("/members").post(addMembers)
router.route("/reviews/comments").post(addComments)
router.route('/reviews/fetchComments').post(getComments)
router.route("/allMembers").post(getMembers)

export default router;