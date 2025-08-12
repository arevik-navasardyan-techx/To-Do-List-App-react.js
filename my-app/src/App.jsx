import { useState } from "react";
import "./App.css";
import Task from "./components/task/Task";

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

  function handleAddTask() {
    if (input.trim() === "") {
       alert("Task cannot be empty!");
       return;
    } 
    setTasks((tasks)=> [...tasks, input]); 
    setInput(""); 
    closeModal(); 
  }

  return (
    <div className="main-container">
      <button onClick={openModal}>
        <span>
          <img src="./assets/add.png" alt="Add task" />
        </span>
        Add task
      </button>

      {isOpen && (
        <div className="modal">
          <span className="closeModal" onClick={closeModal}>
            <img src="./assets/close.png" alt="close" />
          </span>
          <input
            type="text"
            placeholder="Your task here"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
          />
          <button id="add" onClick={handleAddTask}>
            Ok
          </button>
        </div>
      )}

      
    </div>
    
  );
}

export default App;
