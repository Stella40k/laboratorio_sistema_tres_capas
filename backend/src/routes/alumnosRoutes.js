import { Router } from "express";
import {
  alumnosRepo,
  alumnoRepo,
  crearAlumnoRepo,
  alumnoActualizadoRepo,
  eliminarAlumnoRepo,
} from "../repositories/alumnosRepository.js";

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

routes.get("/consultarAlumnos", alumnosRepo);
routes.post("/crearAlumno", crearAlumnoRepo);
routes.put("/actualizarAlumno/:id", alumnoActualizadoRepo);
routes.delete("/eliminarAlumno/:id", eliminarAlumnoRepo);
export default routes;
