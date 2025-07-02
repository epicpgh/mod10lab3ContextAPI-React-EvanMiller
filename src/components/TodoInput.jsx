import { useState } from "react";
import { useTodos } from "../context/ToDoContext"; 

export function TodoInput() {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo({
        id: Date.now().toString(),
        text: todoText.trim(),
        completed: false,
      });
      setTodoText("");
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Add a Todo</h2>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 items-center w-full max-w-md"
      >
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo..."
          className="border px-4 py-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
