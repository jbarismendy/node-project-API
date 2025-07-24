import "dotenv/config";
import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Bienvenido a la API REST - Sistema de Gestion de Productos"})
})

import productsRouter from './src/routes/products.route.js';
app.use("/api", productsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));