import mongoose from "mongoose";
const { Schema } = mongoose;

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

export const Product = mongoose.model("Product", ProductSchema);
