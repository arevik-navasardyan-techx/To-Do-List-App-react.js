import { useState } from "react";
import "./App.css";
import Task from "./components/task/Task";
import { closeIcon, addIcon } from "./assets";


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
      name: input
    };

    setTasks((tasks) => [...tasks, newTask]);
    setInput("");
    closeModal(); 
  }

  return (
    <div className="main-container">
      <button onClick={openModal}>
        <span>
          <img src={addTaskIcon} alt="Add task" />
        </span>
        Add task
      </button>

      {isOpen && (
        <div className="modal">
          <span className="closeModal" onClick={closeModal}>
            <img src={closeIcons} alt="close" />
          </span>
          <input
            type="text"
            placeholder="Your task here"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
          />
          <button id="add" onClick={addTask}>
            Ok
          </button>
        </div>
      )}

{/* 
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} name={task} />
        ))}
      </div> */}

      
    </div>
    
  );
}

export default App;
