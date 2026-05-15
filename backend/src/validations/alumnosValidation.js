export const validarAlumno = (req, res, next) => {
  const { apellidos, nombres, dni } = req.body;

  if (!apellidos || !nombres || !dni) {
    return res.status(400).json({
      ok: false,
      msg: "Todos los campos son obligatorios",
    });
  }

  next();
};
