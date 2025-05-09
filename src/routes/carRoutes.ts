import { Router } from "express";
import {
  getCars,
  createCar,
  getCarById,
  updateCar,
  deactivateCar,
} from "../controllers/carController";

import { validate } from "../middleware/validate";
import { carSchema } from "../schemas/carSchema";

const router = Router();

router.get("/", getCars);
router.post("/", validate(carSchema), createCar);
router.get("/:id", getCarById);
router.put("/:id", updateCar);
router.delete("/:id", deactivateCar);

export default router;
