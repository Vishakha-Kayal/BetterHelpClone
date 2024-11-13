import { getGroups,editGroup } from "../controllers/groups.controller.js";
import {Router} from 'express';
const router=Router();

router.route("/").get(getGroups)

router.route("/:id").put(editGroup)

export default router;