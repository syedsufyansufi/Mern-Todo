import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db.js";
import taskRoutes from "./Routes/taskRoutes.js";

dotenv.config();
const app = express();

// ✅ CORS - allow only your frontend
app.use(cors({
  origin: process.env.FRONTEND_URL, // "https://mern-todo-beta-six.vercel.app"
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));

// Middleware
app.use(express.json());

// ✅ Connect DB
connectDB();

// ✅ Routes
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Hello MERN TODO");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
