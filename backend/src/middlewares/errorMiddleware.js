export const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    ok: false,
    msg: "Error interno del servidor",
  });
};
