import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import env from "dotenv";
env.config();
import cors from "cors";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// DB Connection

// app.use("api/auth", authRoutes);

const mongo_url =
  "";

mongoose
  .connect(mongo_url, {
    dbName: "auth-system-db",
  })
  .then(() => {
    console.log(`DB connected`);
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req: Request, res: Response): any => {
  return res.status(200).json({
    message: `Welcome to the server`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
