import React, { useState } from "react";
import Icon from "../components/Icon";

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
			<div style={{display: 'flex'}}>
				<input type="text" value={newTodo} placeholder="할 일 입력"
					style={{flex:'1 1 0%', marginRight: '8px'}}
					className="cm-input"
					onChange={(e) => setNewTodo(e.target.value)} 
				/>
				<button className="btn__full--primary-md" onClick={addTodo}>추가</button> 
			</div>
			<ul className="todo__list">
				{todos.map((todo, index) => (
					<li key={`todo-list-${todo.id}`} className={todo.checked ? 'chip__full--gray-sm' : 'chip__line--primary-sm'}>
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
								<Icon name="close__full--6b7" alt="리스트 삭제" width='24' height='24'/>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todo
