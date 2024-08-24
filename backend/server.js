import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import producRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import bodyParser from "body-parser";
const port = process.env.PORT || 8000;

connectDB(); // connect to MongoDB

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.set("trust proxy", 1);

app.use(cookieParser());

app.use(bodyParser.json());

app.use("/api/products", producRoutes);
app.use("/api/users", cors(corsOptions), userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});
console.log("server", process.env.NODE_ENV);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server listening on port ${port}`));

export default app;
