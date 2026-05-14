import app from "./app.js";
import { envs } from "./config/config.env.js";

app.listen(envs.PORT, "0.0.0.0", () => {
  console.log("Server coriendo en el puerto ", envs.PORT);
});
