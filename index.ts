import express from "express";
import clientRoutes from "./src/routes/clientRoutes";
import carRoutes from "./src/routes/carRoutes";
import appointmentRoutes from "./src/routes/appointmentRoutes";
import serviceHistory from "./src/routes/serviceHistoryRoutes";
import { errorHandler } from "./src/middleware/errorHandler";

const app = express();
app.use(express.json());

app.use("/api/clients", clientRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/history", serviceHistory);

// Error handling middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
