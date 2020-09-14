import dotenv from "dotenv";
import express from "express";

import { DBConnect } from "./init";
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

DBConnect.init();

app.get("/", (req: any, res: any) => {
  res.send("AAA!!!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
