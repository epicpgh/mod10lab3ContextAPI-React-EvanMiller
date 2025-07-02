
import './App.css';

import { TodoProvider} from './context/ToDoContext';
import { FilterProvider } from './context/FilterContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;