import { Router } from "express";
import {
  todosLosAlumnosController,
  crearAlumnoController,
  alumnoActualizadoController,
  eliminarAlumnoController,
} from "../controller/alumnosController.js";
import { validarAlumno } from "../validations/alumnosValidation.js";

const routes = Router();

//prueba de rutas
routes.get("/test", (req, res) => {
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

routes.get("/consultarAlumnos", todosLosAlumnosController);
routes.post("/crearAlumno", validarAlumno, crearAlumnoController);
routes.put("/actualizarAlumno/:id", validarAlumno, alumnoActualizadoController);
routes.delete("/eliminarAlumno/:id", eliminarAlumnoController);
export default routes;
