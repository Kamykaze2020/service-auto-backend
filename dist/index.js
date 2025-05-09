"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientRoutes_1 = __importDefault(require("./src/routes/clientRoutes"));
const carRoutes_1 = __importDefault(require("./src/routes/carRoutes"));
const appointmentRoutes_1 = __importDefault(require("./src/routes/appointmentRoutes"));
const serviceHistoryRoutes_1 = __importDefault(require("./src/routes/serviceHistoryRoutes"));
const errorHandler_1 = require("./src/middleware/errorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/clients", clientRoutes_1.default);
app.use("/api/cars", carRoutes_1.default);
app.use("/api/appointments", appointmentRoutes_1.default);
app.use("/api/history", serviceHistoryRoutes_1.default);
// Error handling middleware
app.use(errorHandler_1.errorHandler);
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
