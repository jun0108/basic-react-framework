import { useState } from 'react'
import { TodoList, TodoHeader } from "~/styles/pages/Todo";
import CmInput from "~/components/CmInput";
import TodoItem from './TodoItem'

interface Todo {
	id: number;
	text: string;
	selected: boolean;
}

const Todo = () => {
	const [todoList, setTodoList] = useState<Todo[]>([])
	const [inputValue, setInputValue] = useState('')

	const handleAddTodo = () => {
		if (inputValue.trim() === '')
			return

		const newTodo: Todo = {
			id: Date.now(),
			text: inputValue,
			selected: false
		}

		setTodoList([...todoList, newTodo])
		setInputValue('')
	}

	const toggleChecked = (id: number) => {
		setTodoList(todoList.map(todo =>
			todo.id === id ? { ...todo, selected: !todo.selected } : todo
		));
	};
	const handleDeleteTodo = (id: number) => {
		setTodoList(todoList.filter((todo) => todo.id !== id))
	}

	const handleClearAll = () => {
		setTodoList([])
	}

	return (
		<TodoList>
			<TodoHeader>
				<CmInput
					type='text'
					value={inputValue}
					placeholder='할일을 입력해주세요.'
					onChange={(value) => setInputValue(value)}
				/>
				<button className='btn__full--primary-md' onClick={handleAddTodo}>
					추가
				</button>
				<button className='btn__line--secondary-md' onClick={handleClearAll}>
					전체 삭제
				</button>
			</TodoHeader>
			<ul>
				{todoList.length ? (
					todoList.map((todo) => (
						<TodoItem key={todo.id} id={todo.id} selected={todo.selected} text={todo.text} isSelected={toggleChecked} onDelete={handleDeleteTodo} />
					))
				) : (
					<li>등록된 할일이 없습니다.</li>
				)
				}
			</ul>
		</TodoList>
	)
}

export default Todo