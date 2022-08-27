import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {

    const [userInput, setUserInput] = useState('Algo para hacer?');

    const handleOnChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.trim !== '') {
            addTodo(userInput);
            setUserInput('');
        }
    }

    return (
        < >
            <form onSubmit={handleSubmit}>
                <input className='addtaskinput' type="text" value={userInput} onChange={handleOnChange} />
                <button className='submit'>Agregar Tarea</button>
            </form>
        </  >
    )
}
