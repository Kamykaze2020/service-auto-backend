"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carController_1 = require("../controllers/carController");
const validate_1 = require("../middleware/validate");
const carSchema_1 = require("../schemas/carSchema");
const carSchema_2 = require("../schemas/carSchema");
const router = (0, express_1.Router)();
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
router.get("/", carController_1.getCars);
router.post("/", (0, validate_1.validate)(carSchema_1.carSchema), carController_1.createCar);
router.get("/:id", carController_1.getCarById);
router.put("/:id", (0, validate_1.validate)(carSchema_2.updateCarSchema), carController_1.updateCar);
router.delete("/:id", carController_1.deactivateCar);
exports.default = router;
