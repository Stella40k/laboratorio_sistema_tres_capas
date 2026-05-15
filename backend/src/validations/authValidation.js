export const validarRegistro = (req, res, next) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({
      ok: false,
      msg: "Todos los campos son obligatorios",
    });
  }

  next();
};
export const validarLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      ok: false,
      msg: "Email y contraeña obligatorios",
    });
  }

  next();
};
