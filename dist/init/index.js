"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnect = void 0;
const mongodb_1 = __importDefault(require("mongodb"));
const client = mongodb_1.default.MongoClient;
const url = "mongodb://localhost:27017/burger";
class Connect {
    constructor(url1) {
        this.url = "";
        this.url = url1;
    }
    init() {
        client.connect(this.url, { useUnifiedTopology: true }, (err, db) => {
            if (err) {
                throw err;
            }
            console.log("DB Connect!");
            db.close();
        });
    }
}
exports.DBConnect = new Connect(url);
//# sourceMappingURL=index.js.map