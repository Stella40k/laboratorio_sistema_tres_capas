import connect from "../config/config.db.js";

//crear usuario
export const crearUsuarioRepo = async (nombre, email, password) => {
  const sql = `
    INSERT INTO usuarios
    (nombre, email, password)
    VALUES (?, ?, ?)
    `;
  const [resultados] = await connect
    .promise()
    .query(sql, [nombre, email, password]);
  return resultados;
};

//buscar usuario x gmail
export const buscarUsuarioEmailRepo = async (email) => {
  const sql = `
    SELECT *
    FROM usuarios
    WHERE email = ?
    `;
  const [resultados] = await connect.promise().query(sql, [email]);
  return resultados;
};

//buscar x id
export const idUsuarioRepo = async (id) => {
  const sql = `
    SELECT
        id,
        nombre,
        email
    FROM usuarios
    WHERE id = ?
    `;
  const [resultados] = await connect.promise().query(sql, [id]);
  return resultados;
};
