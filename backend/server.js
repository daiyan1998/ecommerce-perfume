import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import products from "./data/products.js";
const port = process.env.PORT || 5000;

connectDB(); // connect to MongoDB

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`server listening on port ${port}`));
