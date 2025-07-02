import { useTodos } from "../context/ToDoContext"; // adjust path if needed
import { useState } from "react";

export function TodoItem({ todo }) {
  const [newText, setNewText] = useState(todo.text);
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between gap-4 border-b py-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex items-center gap-2">
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="border px-2 py-1 rounded"
              autoFocus
            />
            <button type="submit" className="text-green-600">Save</button>
          </form>
        ) : (
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} className="text-blue-600">
            Edit
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-red-600">
          Delete
        </button>
      </div>
    </li>
  );
}


export default TodoItem;
