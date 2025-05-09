"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var clientController_1 = require("../controllers/clientController");
var router = (0, express_1.Router)();
router.get("/", clientController_1.getClients);
router.post("/", clientController_1.createClient);
exports.default = router;
