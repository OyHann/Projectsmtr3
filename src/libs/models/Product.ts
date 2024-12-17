import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
    imgSrc: {
    required: true,
    },
    fileKey: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Product = models.Product || model("Product", productSchema);

export default Product;