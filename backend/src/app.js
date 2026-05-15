import express from "express";
import cors from "cors";
import routes from "./routes/alumnosRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/alumnos", routes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

export default app;
