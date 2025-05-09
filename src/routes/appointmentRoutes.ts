import { Router } from "express";
import {
  getAppointments,
  createAppointment,
} from "../controllers/appointmentController";

import { validate } from "../middleware/validate";
import { appointmentSchema } from "../schemas/appointmentSchema";

const router = Router();

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Get all appointments
 *     responses:
 *       200:
 *         description: List of appointments
 *   post:
 *     summary: Create a new appointment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [carId, contactMethod, action, date, durationMins]
 *             properties:
 *               carId:
 *                 type: integer
 *               contactMethod:
 *                 type: string
 *                 enum: [email, telefon, fizic]
 *               action:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               durationMins:
 *                 type: integer
 *                 multipleOf: 30
 *     responses:
 *       201:
 *         description: Appointment created
 */

router.get("/", getAppointments);
router.post("/", validate(appointmentSchema), createAppointment);

export default router;
