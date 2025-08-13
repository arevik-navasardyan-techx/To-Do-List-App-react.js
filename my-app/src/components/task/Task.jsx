import { useState } from "react";
import { editIcon, deleteIcon } from "../../assets";
import "./Task.css";

export default function Task({ task, onDelete, complete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const id = task.id;
  const name = task.name;
  const isDone = task.isDone;

  function completeTask() {
    complete(id);
  }

  function handleDelete() {
    onDelete(id);
  }

  function startEditing() {
    setIsEditing(true);
  }

  function handleEditChange(e) {
    setNewName(e.target.value);
  }

  function saveEdit() {
    if (newName.trim() !== "") {
      onEdit(id, newName);
      setIsEditing(false);
    }
  }

  function cancelEdit() {
    setIsEditing(false);
    setNewName(name);
  }

  return (
    <div className={`task ${isDone ? "completed" : ""}`}>
      <input type="checkbox" id={id} checked={isDone} onChange={completeTask} />
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={handleEditChange}
          onBlur={saveEdit}
        />
      ) : (
        <label htmlFor={id}>{name}</label>
      )}

      <div className="actions">
        <span onClick={startEditing}>
          <img src={editIcon} alt="edit icon" />
        </span>
        <span>
          <img src={deleteIcon} alt="delete icon" onClick={handleDelete} />
        </span>
      </div>

      {isEditing && (
        <div className="edit-actions">
          <button onClick={saveEdit}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
}
