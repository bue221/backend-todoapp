import express from "express";

const app = express();

//settings

//middlewares

// routes

//static files

//start server
app.get("/*", (req, res) => {
  res.json({
    mensaje: "Buena ya empezamos",
  });
});

app.listen(8080, () => console.log("run on port http://localhost:8080"));
