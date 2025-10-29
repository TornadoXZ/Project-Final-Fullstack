const express = require('express');
require('dotenv').config();
const pool = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

//Ruta raiz 
app.get("/", (req, res)=>{
    res.send("Servidro Node.js + Express + PostgreSQL");
});

// Import y usar rutas de usuarios
const rutas = require('./src/routes/userRoutes');
// 1. Importar el enrutador de usuarios
app.use("/api", rutas);
//2. usar el enrutadir de usuaruios con el prefijo /api/users
app.use("/api", rutas );
//3 . app listen en el puerto definido
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

