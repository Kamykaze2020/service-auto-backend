import express from "express";
import clientRoutes from "./src/routes/clientRoutes";

const app = express();
app.use(express.json());

app.use("/api/clients", clientRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
