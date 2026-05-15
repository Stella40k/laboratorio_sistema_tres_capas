import {
  crearUsuarioRepo,
  buscarUsuarioEmailRepo,
  //idUsuarioRepo,
} from "../repositories/authRepository.js";

//registro
export const registroController = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    //validacion de email
    const existeEmail = await buscarUsuarioEmailRepo(email);
    if (existeEmail && existeEmail.length > 0) {
      return res.status(400).json({
        ok: false,
        msg: "Email ya registrado",
      });
    }

    //crear usuario en la bd
    await crearUsuarioRepo(nombre, email, password);
    return res.status(201).json({
      ok: true,
      msg: "Usuario registrado",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error al registrar el usuario",
    });
  }
};

//login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //busqyeda de user
    const usuario = await buscarUsuarioEmailRepo(email);
    if (!usuario || usuario.length === 0) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario no encontrado",
      });
    }

    //validar contraseña
    if (usuario[0].password !== password) {
      return res.status(400).json({
        ok: false,
        msg: "Contraseña incorrecta",
      });
    }
    return res.status(200).json({
      ok: true,
      msg: "Usuario autenticado",
      usuario: {
        id: usuario[0].id,
        nombre: usuario[0].nombre,
        email: usuario[0].email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      ok: false,
      msg: "Error al autenticar el usuario",
    });
  }
};
