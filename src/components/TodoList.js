import React from 'react';


export default function TodoList({todos}) {
  return (
    <div>
        {
            todos.map((todo)=>{
                return(
                    <div>{todo.task}</div>
                )
            })
        }

    </div>
  )
}
