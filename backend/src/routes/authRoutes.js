import { Router } from "express";
import {
  registroController,
  loginController,
} from "../controller/authController.js";

const authRoutes = Router();

//prueba de rutas
authRoutes.get("/test", (req, res) => {
  try {
    res.json({
      msg: "Rutas funcionales",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msj: "Error en el servidor",
    });
  }
});

authRoutes.post("/register", registroController);
authRoutes.post("/loguin", loginController);

export default authRoutes;
