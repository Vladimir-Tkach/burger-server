import dotenv from "dotenv";
import express, { request, response } from "express";
import bodyParser from "body-parser";
import { createTest } from "~/controllers/product";

import { DBConnect } from "./init";
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

DBConnect.init();

app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
  res.send("AAA!!!");
});

app.post("/create", (req: typeof request, res: typeof response) => {
  res.end(JSON.stringify(req.body));
  // createTest();
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
