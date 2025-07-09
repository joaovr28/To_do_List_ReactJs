const Tarefa = ({ task, removeTask, completedTask }) => {
  return (
    <div className="content">
      <li className="task">
        {task.nome} {task.concluida && "(Concluída)"}
      </li>
      <button onClick={() => completedTask(task.id)}>Concluir</button>
      <button onClick={() => removeTask(task.id)}>X</button>
    </div>
  );
};

export default Tarefa;
