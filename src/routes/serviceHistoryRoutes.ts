import { Router } from "express";
import {
  getHistories,
  createHistory,
} from "../controllers/serviceHistoryController";

import { validate } from "../middleware/validate";
import { serviceHistorySchema } from "../schemas/serviceHistorySchema";

const router = Router();

/**
 * @swagger
 * /api/history:
 *   get:
 *     summary: Get all service history records
 *     tags: [History]
 *     responses:
 *       200:
 *         description: List of service history entries
 *   post:
 *     summary: Create a service history record
 *     tags: [History]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [appointmentId, problemsReported, workDone, replacedParts, durationMins]
 *             properties:
 *               appointmentId:
 *                 type: integer
 *               problemsReported:
 *                 type: string
 *               workDone:
 *                 type: string
 *               replacedParts:
 *                 type: string
 *               durationMins:
 *                 type: integer
 *                 multipleOf: 10
 *     responses:
 *       201:
 *         description: Service history created
 */

router.get("/", getHistories);
router.post("/", validate(serviceHistorySchema), createHistory);

export default router;
