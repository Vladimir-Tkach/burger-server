import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.get("/", (req: any, res: any) => {
  res.send("AAA!!!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
