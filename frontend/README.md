page.jsx -> listas de las tareas
add/page.jsx -> Formulario para agregar tareas
layout -> Navbar + estilos globales, footer, etc...



- interface Task {...} -> Delcara la froa exact de los objetos que vienen desde el backend
- useState<Task[]> -> Indica que el estado es un arreglo de tareas Task[], no un arreglo vacio generico
- axios.get<Task[]> -> le dice a Axios: "Esta peticion devuelve un array de Task"
- t.description -> Ahora vs Code sabe que t es un Task, reconoce el titulo, descripcion etc ...


## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

