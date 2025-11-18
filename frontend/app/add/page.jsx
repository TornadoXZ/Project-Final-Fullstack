// Vista para agregar las tareas mediante el Formulario
"use client";
import {useState} from "react";
import axios from "axios";

export default function AddTask(){
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescricpion] = useState("");

    //HandleSubmit que ayuda a enviar info al Back
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4000/api/tasks", {titulo, descripcion});
        setTitulo(""); setDescripcion("");
        alert("Tarea creada con exito")
    };

    return (
        <div>
            <h2 className="text-2xl font-nold mb-4">Agregar tarea</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
                <input 
                    className="border p-2 rounded"
                    placeholder="Titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <textarea 
                    className="border p-2 rounded" 
                    placeholder="Descripcion"
                    value={descripcion}
                    onChange={(e) => setDescricpion(e.target.value)}
                />
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Guardar
                </button>
            </form>
        </div>
    );
}