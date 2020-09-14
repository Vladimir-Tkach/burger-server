"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const init_1 = require("./init");
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
init_1.DBConnect.init();
app.get("/", (req, res) => {
    res.send("AAA!!!");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map