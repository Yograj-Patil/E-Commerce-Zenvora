import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from './routes/authRoutes.js'
import productRouter from "./routes/productRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/auth", authRoutes);   
app.use("/api/auth", authRouter);   
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("API Running");
});

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});