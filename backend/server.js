import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import producRoutes from "./routes/productRoutes.js";
const port = process.env.PORT || 5000;

connectDB(); // connect to MongoDB

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", producRoutes);

app.listen(port, () => console.log(`server listening on port ${port}`));
