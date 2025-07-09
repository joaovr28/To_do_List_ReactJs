import { useState} from "react";
import CreatTask from "./components/CreateTask";
import Tarefa from "./components/Tarefa";
import "./style.css";

function App() {
  const [task, setTask] = useState([]);

  const addTask = (nome, categoria) => {
    const newTask = [
      ...task,
      {
        id: Math.floor(Math.random() * 1000),
        nome,
        concluida: false,
        categoria,
      },
    ];
    setTask(newTask);
  };

  const removeTask = (id) => {
    setTask((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  const completedTask = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="container">
        {task.map((task) => (
          <Tarefa
            key={task.id}
            task={task}
            removeTask={removeTask}
            completedTask={completedTask}
          />
        ))}
      </div>
      <CreatTask addTask={addTask} />
    </div>
  );
}

export default App;
