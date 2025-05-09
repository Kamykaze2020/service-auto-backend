"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const validate_1 = require("../middleware/validate");
const appointmentSchema_1 = require("../schemas/appointmentSchema");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Get all appointments
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: List of appointments
 *   post:
 *     summary: Create a new appointment
 *     tags: [Appointments]
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
router.get("/", appointmentController_1.getAppointments);
router.post("/", (0, validate_1.validate)(appointmentSchema_1.appointmentSchema), appointmentController_1.createAppointment);
exports.default = router;
