import { Router } from "express";
import { getClients, createClient } from "../controllers/clientController";

const router = Router();
router.get("/", getClients);
router.post("/", createClient);

export default router;
