"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceHistoryController_1 = require("../controllers/serviceHistoryController");
const router = (0, express_1.Router)();
router.get("/", serviceHistoryController_1.getHistories);
router.post("/", serviceHistoryController_1.createHistory);
exports.default = router;
