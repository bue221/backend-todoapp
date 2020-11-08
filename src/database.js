import mongoose from "mongoose";

const URI = "mongodb://localhost/mern-task";

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

export default mongoose;
