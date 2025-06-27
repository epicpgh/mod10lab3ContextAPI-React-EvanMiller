import { useState, useEffect } from 'react';
import './App.css';

import { TodoProvider } from './context/TodoContext';
import { FilterProvider } from './context/FilterContext';
import { ThemeProvider } from './context/ThemeContext';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ThemeToggleButton from './components/ThemeToggleButton';
import FilterButtons from './components/FilterButtons';
function AppContent() {

  return(
    <div>
      <TodoInput />
      <TodoList />
    </div>
  )
}

 
function App() {
  return (
    <>
      <ThemeProvider>
        <FilterProvider>
          <TodoProvider>
            <h1>To Do App</h1>
            <AppContent />
          </TodoProvider>
        </FilterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
