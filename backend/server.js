import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import producRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
const port = process.env.PORT || 5000;

connectDB(); // connect to MongoDB
const __dirname = fileURLToPath(import.meta.url);

const app = express();
app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use("/api/products", producRoutes);
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV !== "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server listening on port ${port}`));
