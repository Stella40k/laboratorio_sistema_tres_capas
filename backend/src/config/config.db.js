import { envs } from "./config.env.js";
import mysql from "mysql2";

require("dotenv").config();

const connect = mysql.createConnection({
  host: envs.DB_HOST,
  user: envs.user,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
});
