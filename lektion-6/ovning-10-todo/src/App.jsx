import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Handla mat", description: "Mjölk, bröd och ägg", done: false },
    { id: 2, title: "Plugga React", description: "Gör övning 10", done: true },
    { id: 3, title: "Städa", description: "Dammsuga och moppa", done: false },
    { id: 4, title: "Träna", description: "Löprunda 5 km", done: true },
    { id: 5, title: "Ringa mormor", description: "Fråga om söndagsmiddagen", done: false },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      description,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo-lista</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Beskrivning"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Lägg till</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3 style={{ color: todo.done ? "green" : "black" }}>
              {todo.title}
            </h3>

            {!todo.done && <p>{todo.description}</p>}

            <button onClick={() => toggleDone(todo.id)}>
              {todo.done ? "Ångra" : "Markera som utförd"}
            </button>
            <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 