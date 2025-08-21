import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db.js";
import taskRoutes from "./Routes/taskRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

//db connect
connectDB();

//routes

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Hello MERN TODO");
});

app.listen(PORT, () =>
  console.log(`Server running On Port http://localhost:${PORT}`)
);
