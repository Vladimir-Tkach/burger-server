"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const ProductSchema = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    category: String,
    market: String,
    type: String,
    weight: Number,
    components: {
        size: String,
        bread: String,
        vegetable: [String],
        sauce: [String],
        filling: [String],
    },
});
exports.Product = mongoose_1.default.model("Product", ProductSchema);
//# sourceMappingURL=product.js.map