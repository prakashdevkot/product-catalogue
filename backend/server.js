//const express = require('express'); traditional way of importing express
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept json data in the req.body

app.use("/api/products", productRoutes); //we have created one route only for "product" in server.js

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT)
 });
