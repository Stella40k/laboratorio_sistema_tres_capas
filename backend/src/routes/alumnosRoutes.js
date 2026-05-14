import { Router } from "express";

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

export default routes;
