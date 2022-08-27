import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import data from './data.json'

function App() {
  const [todos ,setTodos ]= useState(data);

  return (
    <div className="container">
    <TodoList todos = {todos} />
    </div>
  );
}

export default App;
