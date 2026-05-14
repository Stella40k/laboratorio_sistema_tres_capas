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
