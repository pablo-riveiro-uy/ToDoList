import React from 'react'

export default function ToDoItem({ todo, onComplete, onDeleteItem }) {
	const getStyle = () => {
		return {
			textDecoration: todo.complete ? 'line-through' : 'none',
			textDecorationColor: 'black',
			margin: '20px',
			width: '90%;',
			color: todo.complete ? 'black' : 'white',
			borderRadius: '5%',
			boxShadow: '0px 5px 4px rgba(165, 105, 189, 0.5)',
			padding: '2px'
		}
	}

	return (
		<div style={getStyle()}>
			<div className="task">
				<input type='checkbox' checked={todo.complete}
					onChange={() => onComplete(todo.id)} />

				{todo.task}
				<button className='add-btn' onClick={() => onDeleteItem(todo.id)}>X</button>
			</div>
		</ div >
	)
}
