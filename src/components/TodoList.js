import React from 'react';
import ToDoItem from './ToDoItem';

export default function TodoList({ todos, onComplete, onDeleteItem }) {
  return (
    <>
      {
        todos.map((todo, index) => {
          return (
            <ToDoItem key={`Tarea - ${index}`} todo={todo} onComplete={onComplete} onDeleteItem={onDeleteItem} />
          )
        })
      }

    </>
  )
}
