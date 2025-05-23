"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const carRoutes_1 = __importDefault(require("./routes/carRoutes"));
const appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
const serviceHistoryRoutes_1 = __importDefault(require("./routes/serviceHistoryRoutes"));
const errorHandler_1 = require("./middleware/errorHandler");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/clients", clientRoutes_1.default);
app.use("/api/cars", carRoutes_1.default);
app.use("/api/appointments", appointmentRoutes_1.default);
app.use("/api/history", serviceHistoryRoutes_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
// Error handling middleware
app.use(errorHandler_1.errorHandler);
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
