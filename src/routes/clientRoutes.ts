import { Router } from "express";
import { getClients, createClient } from "../controllers/clientController";
import { validate } from "../middleware/validate";
import { clientSchema } from "../schemas/clientSchema";

const router = Router();

router.get("/", getClients);
router.post("/", validate(clientSchema), createClient);

export default router;
