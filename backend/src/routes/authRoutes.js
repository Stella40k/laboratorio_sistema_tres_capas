import { Router } from "express";
import {
  registroController,
  loginController,
} from "../controller/authController.js";
import {
  validarRegistro,
  validarLogin,
} from "../validations/authValidation.js";
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

authRoutes.post("/register", validarRegistro, registroController);
authRoutes.post("/login", validarLogin, loginController);

export default authRoutes;
