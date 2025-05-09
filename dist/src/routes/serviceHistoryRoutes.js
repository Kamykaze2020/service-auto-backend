"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceHistoryController_1 = require("../controllers/serviceHistoryController");
const validate_1 = require("../middleware/validate");
const serviceHistorySchema_1 = require("../schemas/serviceHistorySchema");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/history:
 *   get:
 *     summary: Get all service history records
 *     responses:
 *       200:
 *         description: List of service history entries
 *   post:
 *     summary: Create a service history record
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
router.get("/", serviceHistoryController_1.getHistories);
router.post("/", (0, validate_1.validate)(serviceHistorySchema_1.serviceHistorySchema), serviceHistoryController_1.createHistory);
exports.default = router;
