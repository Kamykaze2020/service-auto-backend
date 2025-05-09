import { Router } from "express";
import {
  getHistories,
  createHistory,
} from "../controllers/serviceHistoryController";

const router = Router();

router.get("/", getHistories);
router.post("/", createHistory);

export default router;
