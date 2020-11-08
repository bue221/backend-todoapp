import express from "express";
//models
import task from "../models/task";

const router = express.Router();

//obtener todas las tareas
router.get("/", async (req, res) => {
  //consulta la base de datos
  const tasks = await task.find();

  //console.log(tasks);
  res.json({ tareas: tasks });
});

//obtener una unica tarea
router.get("/:id", async (req, res) => {
  const tarea = await task.findById(req.params.id);

  res.json({ tarea });
});

//crear
router.post("/", async (req, res) => {
  //esto se puede gracias a express.json()
  const { title, description } = req.body;

  const nuevaTarea = new task({
    title,
    description,
  });

  await nuevaTarea.save();

  res.json({ status: "Tarea guardada" });
});

//actualizar
router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  const nueva = { title, description };

  //actuliza la tarea con su id y datos nuevos
  await task.findByIdAndUpdate(req.params.id, nueva);

  //console.log(req.params.id);
  res.json({ status: "Tarea actualizada" });
});

//eliminar
router.delete("/:id", async (req, res) => {
  //actuliza la tarea con su id y datos nuevos
  await task.findByIdAndRemove(req.params.id);

  //console.log(req.params.id);
  res.json({ status: "Tarea eliminada" });
});

export default router;
