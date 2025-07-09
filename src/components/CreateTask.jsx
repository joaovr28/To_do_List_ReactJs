import React, { useState } from "react";

const CreatTask = ({ addTask }) => {
  const [texto, setTexto] = useState("");
  const [select, setSelect] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!texto || !select) return;
    addTask(texto, select);
    setSelect("");
    setTexto("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={texto}
          type="text"
          onChange={(e) => setTexto(e.target.value)}
        />
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudo">Estudo</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};
export default CreatTask;
