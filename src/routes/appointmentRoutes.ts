import { Router } from "express";
import {
  getAppointments,
  createAppointment,
} from "../controllers/appointmentController";

import { validate } from "../middleware/validate";
import { appointmentSchema } from "../schemas/appointmentSchema";

const router = Router();

router.get("/", getAppointments);
router.post("/", validate(appointmentSchema), createAppointment);

export default router;
