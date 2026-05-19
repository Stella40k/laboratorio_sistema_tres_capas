# Uso de Repositories

Para este proyecto se implementó una arquitectura basada en repositories.

Los repositories son una capa encargada exclusivamente del acceso a datos y comunicación con MariaDB.

Su función principal es:

- ejecutar consultas SQL
- insertar datos
- actualizar registros
- eliminar registros
- consultar información

---

# ¿Por qué utilizamos repositories?

Se eligió esta arquitectura porque el proyecto utiliza:

- Node.js
- Express
- mysql2
- consultas SQL manuales

Al no utilizar un ORM como Sequelize o Prisma, no existen modelos automáticos de entidades. Por esta razón, la mejor práctica es encapsular el acceso a datos dentro de repositories.

---

# Ventajas

- Separación de responsabilidades
- Código más limpio y modular
- Evita mezclar SQL con lógica HTTP
- Facilita mantenimiento
- Facilita escalabilidad
- Permite reutilizar consultas
- Mejora la organización del backend

---

# Funcionamiento

La arquitectura implementada funciona de la siguiente manera:

```text
Routes
↓
Controllers
↓
Repositories
↓
MariaDB
```

# VM2 — Desarrollo del Backend

La máquina virtual VM2 fue destinada al desarrollo e implementación del servidor Backend del sistema distribuido de gestión de alumnos. Este componente fue desarrollado utilizando Node.js y Express, siguiendo una arquitectura modular orientada a separar responsabilidades y facilitar el mantenimiento del código.

El servidor backend escucha en el puerto 3454 y tiene como función principal actuar como intermediario entre el frontend alojado en la VM3 y la base de datos MariaDB ubicada en la VM1.

Tecnologías Utilizadas

Para el desarrollo del backend se utilizaron las siguientes tecnologías y dependencias:

Node.js
Express
MariaDB / MySQL
mysql2
dotenv
cors
nodemon

La configuración del proyecto se realizó utilizando ESModules mediante la propiedad:

"type": "module"

dentro del archivo package.json, permitiendo trabajar con import y export.

Arquitectura Modular

El proyecto fue organizado utilizando una estructura modular dividida por responsabilidades. Esto permitió mantener un código más ordenado, escalable y fácil de mantener.

La estructura implementada fue la siguiente:

routes/
Define las rutas y endpoints disponibles en la API.
controller/
Contiene la lógica HTTP encargada de manejar las solicitudes y respuestas.
repositories/
Gestiona las consultas SQL y el acceso a la base de datos.
validations/
Contiene validaciones de datos de entrada antes de llegar a los controladores.
middlewares/
Maneja funciones intermedias como control global de errores.
config/
Centraliza la configuración de variables de entorno y conexión a base de datos.
Uso de Variables de Entorno

Para evitar exponer información sensible dentro del código fuente, se implementó un archivo .env para almacenar:

Host de la base de datos
Usuario
Contraseña
Nombre de la base
Puerto del servidor

La lectura de estas variables se centralizó mediante un archivo config.env.js.

Ejemplo:

DB_HOST=10.0.2.15
DB_USER=luana
DB_PASSWORD=1234
DB_NAME=ubuntu_bd

PORT=3454

Esto permitió una configuración más segura y reutilizable.

Conexión con MariaDB

La conexión a la base de datos se realizó utilizando la librería mysql2.

El backend fue preparado para conectarse remotamente a la VM1 mediante la IP:

10.0.2.15

La conexión se configuró utilizando mysql.createConnection() y las variables de entorno previamente definidas.

Implementación del Patrón Repository

Se decidió utilizar el patrón Repository para separar completamente las consultas SQL de la lógica de negocio y de la lógica HTTP.

De esta manera:

Los repositories contienen únicamente consultas SQL.
Los controllers contienen únicamente lógica de respuesta HTTP.
Las rutas solamente enlazan endpoints con controladores.

Esta decisión permitió:

reutilizar consultas,
evitar código duplicado,
mejorar la organización del proyecto,
facilitar futuras modificaciones.
CRUD de Alumnos

Se desarrolló un CRUD completo para la entidad alumnos.

Endpoints implementados:

Método Endpoint
GET /api/alumnos/consultarAlumnos
POST /api/alumnos/crearAlumno
PUT /api/alumnos/actualizarAlumno/:id
DELETE /api/alumnos/eliminarAlumno/:id

Las operaciones incluyen:

creación de alumnos,
consulta general,
actualización,
eliminación.

Además, se implementó validación para evitar DNI duplicados utilizando restricciones UNIQUE en MariaDB y validaciones desde el backend.

Sistema de Autenticación

También se implementó un sistema básico de autenticación con:

registro de usuarios,
inicio de sesión.

Endpoints implementados:

Método Endpoint
POST /api/auth/register
POST /api/auth/login

Durante el registro se verifica:

existencia previa del email,
campos obligatorios.

Durante el login se valida:

existencia del usuario,
coincidencia de contraseña.

Debido a que la consigna no exigía JWT ni autenticación avanzada, el sistema fue implementado de forma simple utilizando consultas directas a la base de datos.

Validaciones y Middlewares

Se desarrollaron validaciones separadas para:

alumnos,
autenticación.

Estas validaciones verifican:

campos obligatorios,
datos incompletos,
formatos mínimos.

También se implementó un middleware global de errores para centralizar el manejo de excepciones del servidor y evitar repetición de código.

Pruebas del Backend

El backend fue probado utilizando Thunder Client y solicitudes HTTP locales.

Se verificó el correcto funcionamiento de:

creación de alumnos,
consulta de alumnos,
actualización,
eliminación,
registro de usuarios,
login,
validaciones,
manejo de errores.
Estado Final de VM2

La máquina virtual VM2 quedó preparada con:

Backend funcional
Arquitectura modular
CRUD completo
Sistema de autenticación básico
Validaciones
Middleware de errores
Variables de entorno
Conexión preparada para MariaDB remota
Endpoints REST funcionales

El sistema quedó listo para integrarse posteriormente con el frontend alojado en la VM3.
