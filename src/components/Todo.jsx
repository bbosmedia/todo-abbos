import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, removeTodo }) {
	return todos.map((todo, index) => (
		<div key={index} className={todo.isCoplete ? 'todo-row complete' : 'todo-row'}>
			<div key={todo.id}>{todo.text}</div>
			<div className="icons">
				<RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
				<TiEdit />
			</div>
		</div>
	));
}

export default Todo;
