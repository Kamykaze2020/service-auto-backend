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
import { updateCarSchema } from "../schemas/carSchema";

const router = Router();

/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Get all cars
 *     responses:
 *       200:
 *         description: List of cars
 *   post:
 *     summary: Add a new car
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [licensePlate, vin, make, model, year, engineType, engineSize, horsepower, kilowatts, clientId]
 *             properties:
 *               licensePlate:
 *                 type: string
 *               vin:
 *                 type: string
 *               make:
 *                 type: string
 *               model:
 *                 type: string
 *               year:
 *                 type: integer
 *               engineType:
 *                 type: string
 *                 enum: [diesel, benzina, hibrid, electric]
 *               engineSize:
 *                 type: number
 *               horsepower:
 *                 type: integer
 *               kilowatts:
 *                 type: number
 *               clientId:
 *                 type: integer
 *
 * /api/cars/{id}:
 *   get:
 *     summary: Get car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Car details
 *       404:
 *         description: Car not found
 *   put:
 *     summary: Update car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Fields to update (partial allowed)
 *     responses:
 *       200:
 *         description: Car updated
 *   delete:
 *     summary: Delete car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Car deleted
 */

router.get("/", getCars);
router.post("/", validate(carSchema), createCar);
router.get("/:id", getCarById);
router.put("/:id", validate(updateCarSchema), updateCar);
router.delete("/:id", deactivateCar);

export default router;
