"use client";
import { useEffect, useState } from "react";
import axios from "axios";

// Definimos la estructura del tipo de datos que esperamos
interface Task {
  id: number;
  titulo: string;
  descripcion: string;
  estado?: boolean;
}

export default function Home() {
  // UseState -> con el tipo Task[]
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(()=> {
    // HTTPs
  axios.get<Task[]>("http://localhost:4000/api/tasks")
  .then(res => setTasks(res.data))
  .catch(err => console.log(Error))
}, []);

return (
  <div>
    <h2 className="text-2xl font-bold mb-4"> Lista de tareas</h2>
    <div className="grid gap-4">
    {
      tasks.map( t => (
        <div key={t.id} className="p-4 border rounded-lg shadow bg-white">
          <h3 className="font-semibold text-lg">{t.titulo}</h3>
          <p>{t.descripcion}</p>
        </div>
      ))}
    </div>
  </div>
)
  
  //TODO: listado de tareas
  //TODO: formulario para aregar nuevas tareas.
  //TODO: conexion al backendcon axios



}