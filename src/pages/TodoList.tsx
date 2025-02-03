import React, { useState } from "react";

export interface ITodo {
  id: number;
  title: string;
  checked: boolean;
}

function Todo() {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const toggleChecked = (id: number) => {
	  setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo
			)
		);
	};
  
	const [newTodo, setNewTodo] = useState<string>(''); 
  
	const addTodo = () => {
		if (newTodo.trim() === '') {
			alert('텍스트를 입력해주세요.')
			return
		};
    
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: Date.now(), title: newTodo, checked: false }, 
		]);
    
		setNewTodo(''); 
	};
  
	const deleteTodo = (id: number) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="todo">
			<div style={{display: 'flex', width: '300px'}}>
				<input type="text" value={newTodo} placeholder="할 일 입력"
					style={{flex:'1 1 0%', marginRight: '8px'}}
					className="cm-input"
					onChange={(e) => setNewTodo(e.target.value)} 
				/>
				<button className="btn__primary" onClick={addTodo}>추가</button> 
			</div>
			<ul className="todo__list">
				{todos.map((todo, index) => (
					<li key={`todo-list-${todo.id}`} className={todo.checked ? 'is-checked' : ''}>
						<div style={{display: 'flex'}}>
							<span>{index + 1}.</span>
							<p>{todo.title}</p>
						</div>
						<div style={{display: 'flex', alignItems: 'center'}}>
							<input 
								type="checkbox"
								checked={todo.checked}
								onChange={() => toggleChecked(todo.id)}
							/>
							<button type="button" onClick={() => deleteTodo(todo.id)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><rect width="32" height="32" fill="none"/><path fill="#dddddd" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todo
