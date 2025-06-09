import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    "Task 1",
    "Task 2",
    "Task 3"
  ]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [editingIndex]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    const updatedTasks = [...tasks];
    if (editingIndex !== null) {
      updatedTasks[editingIndex] = input;
      setEditingIndex(null);
    } else {
      updatedTasks.push(input);
    }
    setTasks(updatedTasks);
    setInput("");
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditingIndex(index);
  };

  return (
    <div className="container">
      <h1 className="heading">TODO LIST</h1>
      <div className="input-section">
        <input
          ref={inputRef}
          type="text"
          placeholder="add item . . ."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>{editingIndex !== null ? "Update" : "ADD"}</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <span>{task}</span>
            <div>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;











// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // Replace 'my-project' with the **name of your GitHub repository**
// export default defineConfig({
//   base: "react-shopping-",
//   plugins: [react()],
//   server: {
//     port: 3000,
//     host: "0.0.0.0",
//     allowedHosts: true
//   }
// })
