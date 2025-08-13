import { useState } from "react";
import Task from "./components/task/Task";
import { addIcon, closeIcon } from "./assets";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function addTask() {
    if (input.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: input,
      isDone: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
    setInput("");
    closeModal();
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function markTaskAsDone(taskId) {
    setTasks(
      tasks.map((task) => {
        task.id === taskId && (task.isDone = !task.isDone);
        return task;
      })
    );
  }

  function editTask(taskId, newName) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  }

  return (
    <div className="main-container">
      <button onClick={openModal} className="addBtn">
        Add task   
        <img src={addIcon} alt="Add task icon" width={30} />
      </button>

      {isOpen && (
        <div className="modal">
          <span className="closeModal" onClick={closeModal}>
            <img src={closeIcon} alt="Close modal icon" width={25} />
          </span>
          <input
            type="text"
            placeholder="Enter your task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
      )}

      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            complete={markTaskAsDone}
            onEdit={editTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
