//Requerir modelo de tarea
const pool = require('../config/db');

// Listar tareas GET
const listartareas = async (req, res) => {
    try{
        const result = await pool.require('Select * FROM tareas ORDER BY id ASC');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

// Crear tareas -  post
const crearTarea = async (req, res) => {
    try {
        const { titulo, descripción} = req.body;
        const result = await pool.query(
            'INSERT INTO tareas (titulo, descripción) VALUES ($1, $2) RETURNING *',
            [titulo, descripcion]
        );
        res.json(result.rows[0]);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

// PUT Actualizar tarea
const actualizarTarea = async (req, res) => {
    try {
        const {id} = req.params;
        const {titulo, descripcion, estado} = req.body;
        const result = await pool.query(
            'UPDATE tareas SET titulo=$1, descripcion=$2, estado=$3 WHERE id=$3 RETURNING *'
        );
        res.json(result.rows[0]);

    } catch (error){
        res.status(500).json({error: error.message});
    }

} 


// DELETE Eliminar tarea
const eliminarTarea = async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query('DELETE FROM tareas WHERE id=$1', [id]);
        res.json({ mensaje: 'Tarea eliminada' });
    } catch (error) {
        res.status(500).json ({ error: error.message });
    };
};



// Exportar controlador de tareas
module.exports = {
    listaTareas,
    crearTarea,
    actualizarTarea,
    eliminarTarea
}

// Docker compose up --build -d
// Docker composer up