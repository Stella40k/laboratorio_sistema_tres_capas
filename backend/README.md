# Crear tabla alumnos (VM1)

Ingresar a MariaDB:

```bash
mysql -u root -p
```

Seleccionar DB:

```sql
USE sistema_alumnos;
```

Crear tabla:

```sql
CREATE TABLE alumnos (

    id INT AUTO_INCREMENT PRIMARY KEY,

    apellidos VARCHAR(100),

    nombres VARCHAR(100),

    dni VARCHAR(20) UNIQUE

);
```

---

# Crear tabla usuarios (VM1)

```sql
CREATE TABLE usuarios (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    email VARCHAR(150) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL

);
```

---

# Verificar tablas

```sql
SHOW TABLES;
```

Resultado esperado:

```text
alumnos
usuarios
```
