import { Router } from "express";
import { getClients, createClient } from "../controllers/clientController";
import { validate } from "../middleware/validate";
import { clientSchema } from "../schemas/clientSchema";

const router = Router();

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

router.get("/", getClients);
router.post("/", validate(clientSchema), createClient);

export default router;
