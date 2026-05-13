import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/");

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

module.exports = app;
