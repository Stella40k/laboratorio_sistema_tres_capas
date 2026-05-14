import {
  alumnosRepo,
  alumnoRepo,
  crearAlumnoRepo,
  alumnoActualizadoRepo,
  eliminarAlumnoRepo,
} from "../repositories/alumnosRepository.js";

// Traer todos
export const todosLosAlumnosController = async (req, res) => {
  try {
    const obtenerAlumnos = await alumnosRepo();
    return res.status(200).json(obtenerAlumnos);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error al obtener todos los alumnos" });
  }
};

// Crear alumno
export const crearAlumnoController = async (req, res) => {
  try {
    const { apellidos, nombres, dni } = req.body;

    // validar dni repetido
    const alumnoExiste = await alumnoRepo(dni);
    if (alumnoExiste && alumnoExiste.length > 0) {
      return res.status(400).json({
        ok: false,
        msg: "DNI ya existente",
      });
    }

    // crear alumno en la bd
    await crearAlumnoRepo(apellidos, nombres, dni);
    return res.status(201).json({
      ok: true,
      msg: "Alumno creado",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error al crear el alumno",
    });
  }
};

//alumno actualixado
export const alumnoActualizadoController = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombres, apellidos, dni } = req.body;
    await alumnoActualizadoRepo(id, apellidos, nombres, dni);
    return res.status(200).json({
      ok: true,
      msg: "Alumno actualizao",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error al actualizar alumno",
    });
  }
};

//eliminar
export const eliminarAlumnoController = async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarAlumnoRepo(id);
    res.status(200).json({
      ok: true,
      msg: "Alumno eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al eliminar alumno",
    });
  }
};
