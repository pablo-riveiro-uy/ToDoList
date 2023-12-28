import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import data from './data.json';
import TodoForm from './components/TodoForm'
import Presentacion from './components/Presentacion';

function App() {
	const [todos, setTodos] = useState(data);

	const onComplete = (id) => {
		console.log('task', id);

		setTodos(todos.map((todo) => {
			return todo.id === Number(id) ? { ...todo, complete: !todo.complete } : { ...todo }
		}))
	}

	const onDeleteItem = (id) => {
		setTodos([...todos].filter(todo => todo.id !== id))
	}

	const addTodo = (newTodo) => {
		console.log('agregado', newTodo)
		let newItem = { id: +new Date(), task: newTodo, complete: false };
		setTodos([...todos, newItem]);

	}

	return (
		<>
			<div className='principal'>
				<div className="profile">

					<Presentacion />
				</div>
				<div className="container">
					<div className="titulo">
						<h1>Lista de Tareas</h1>
					</div>
					<div className="inputNew">
						<TodoForm addTodo={addTodo} />
					</div>

					<TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} />
				</div>
				<div className="footer">
					<div className="item">
						<p>	<span className="material-symbols-outlined">
							home
						</span>
						</p>

						<p>Take a look on my <a href='https://www.linkedin.com/in/pablo-riveiro-uy/'>LinkedIn</a></p>
					</div>
					<div className="item">
						<p>

							<span class="material-symbols-outlined">
								terminal
							</span>
						</p>


						<p>
							Visit my <a href='https://github.com/pablo-riveiro-uy'> Github</a>
						</p>
					</div>


				</div>
			</div >
		</>

	);
}

export default App;
