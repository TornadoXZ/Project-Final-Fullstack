const express = require('express');
const router = express.Router();
const  {listarTareas, crearTarea, actualizarTareas, eliminarTareas} = require('../controllers/taskController');

//Definir rutas para las tareas
//Ruta para el GET
router.get('/tasks', listarTareas);
// Rua para el POST
router.post('/tasks', crearTarea);
// Ruta para el PUT
router.put('/tasks/:id', actualizarTarea);
//Ruta para el DELETE
router.delete('/tasks/:id', eliminarTarea);

module.exports = router;