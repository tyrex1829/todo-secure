import express, { Application, Request, Response } from "express";
import env from "dotenv";
env.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response): any => {
  return res.status(200).json({
    message: `Welcome to the server`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
