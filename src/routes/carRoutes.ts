import { Router } from "express";
import {
  getCars,
  createCar,
  getCarById,
  updateCar,
  deactivateCar,
} from "../controllers/carController";

const router = Router();

router.get("/", getCars);
router.post("/", createCar);
router.get("/:id", getCarById);
router.put("/:id", updateCar);
router.delete("/:id", deactivateCar);

export default router;
