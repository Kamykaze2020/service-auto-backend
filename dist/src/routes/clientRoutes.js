"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
const validate_1 = require("../middleware/validate");
const clientSchema_1 = require("../schemas/clientSchema");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Get all clients
 *     responses:
 *       200:
 *         description: List of clients
 *   post:
 *     summary: Create a new client
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Client created
 */
router.get("/", clientController_1.getClients);
router.post("/", (0, validate_1.validate)(clientSchema_1.clientSchema), clientController_1.createClient);
exports.default = router;
