import { Router } from "express";
import {
  getHistories,
  createHistory,
} from "../controllers/serviceHistoryController";

import { validate } from "../middleware/validate";
import { serviceHistorySchema } from "../schemas/serviceHistorySchema";

const router = Router();

router.get("/", getHistories);
router.post("/", validate(serviceHistorySchema), createHistory);

export default router;
