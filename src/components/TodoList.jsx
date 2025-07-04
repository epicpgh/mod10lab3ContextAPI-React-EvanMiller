
import { useTodos } from "../context/ToDoContext"; // adjust path if needed
import { useFilter } from "../context/FilterContext";
import TodoItem from "./TodoItem";

export function TodoList() {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;