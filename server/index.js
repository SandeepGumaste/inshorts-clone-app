import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import DefaultData from "./default.js";
import Route from "./routes/route.js";
import path from "path";
dotenv.config();
// Components
// Connection
const Connection = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("database connected");
  } catch (error) {
    console.log("This error", error);
  }
};

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/", Route);

Connection();
DefaultData();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}
app.listen(PORT, () => {
  console.log(`server is running successfully on port ${PORT}`);
});
