import express from "express";
import morgan from "morgan";
import path from "path";

//routes imports
import Task from "./routes/task";
//db
import mongoose from "./database";

const app = express();

//settings
app.set("port", process.env.PORT || 4000); //configurar el puerto

//middlewares
app.use(morgan("dev")); //recibir mensajes acerca de la peticiones
app.use(express.json()); //utilizar objetos json

// routes
app.use("/api/task", Task);

//static files
app.use(express.static(path.join(__dirname, "./public")));

//start server
app.get("/*", (req, res) => {
  res.json({
    mensaje: "Buena ya empezamos",
  });
});

app.listen(app.get("port"), () =>
  console.log(`run on port http://localhost:${app.get("port")}`)
);
