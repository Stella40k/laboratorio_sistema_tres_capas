import { envs } from "./config.env.js";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connect = mysql.createConnection({
  host: envs.DB_HOST,
  user: envs.DB_USER,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
});
export default connect;
