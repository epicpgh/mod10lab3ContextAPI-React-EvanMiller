import { useState, useContext, createContext } from "react";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export function TodoProvider({ children }) {
  //state for all todos
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todos, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <TodoContext.Provider
      value={{ addTodo, toggleTodo, deleteTodo, editTodo, todos }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export default TodoContext;
