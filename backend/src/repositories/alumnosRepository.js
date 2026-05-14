import connect from "../config/config.db.js";

//todos
export const alumnos = async () => {
  const sql = `
    SELECT *
    FROM alumnos
    ORDER BY apellidos, nombres
    `;
  const [resultados] = await connect.promise().query(sql);
  return resultados;
};

//busqueda por DNI
export const alumno = async (dni) => {
  const sql = `
    SELECT *
    FROM alumnos
    WHERE dni = ?
    `;
  const [resultados] = await connect.promise().query(sql, [dni]);
  return resultados;
};

//crear alumno
export const crearAlumno = async (apellidos, nombres, dni) => {
  const sql = `
    INSERT INTO alumnos
    (apellidos, nombres, dni)
    VALUES (?, ?, ?)
    `;
  const [resultados] = await connect
    .promise()
    .qery(sql, [apellidos, nombres, dni]);
  return resultados;
};

//actualizar
export const alumnoActualizado = async (id, apellidos, nombres, dni) => {
  const sql = `
    UPDATE alumnos
    SET
        apellidos = ?,
        nombres = ?,
        dni = ?
    WHERE id = ?
    `;
  const [resultados] = await connect
    .promise()
    .query(sql, [apellidos, nombres, dni, id]);
  return resultados;
};

//eliminar
export const eliminarAlumno = async (id) => {
  const sql = `
    DELET FROM alumnos
    WHERE id
    `;
  const [resultados] = await connect.promise().query(sql, [id]);
  return resultados;
};
