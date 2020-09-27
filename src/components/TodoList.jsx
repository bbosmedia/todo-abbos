import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		if (!todo.text || /^\s * $/.test(todo.text)) {
			return;
		}
		setTodos([todo, ...todos]);
	};
	const removeTodo = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);
		setTodos(removeArr);
	};

	return (
		<div className="todo-list">
			<h2 className="todo-heading">What are your plans to do?</h2>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} removeTodo={removeTodo} />
		</div>
	);
}

export default TodoList;
