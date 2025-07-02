import './App.css';

import { TodoProvider } from './context/TodoContext';
import { FilterProvider } from './context/FilterContext';
import { ThemeProvider } from './context/ThemeContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function AppContent() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <AppContent />
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;