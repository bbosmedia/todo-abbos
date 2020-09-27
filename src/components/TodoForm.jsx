import React, { useState } from 'react';

function TodoForm(props) {
	const [input, setInput] = useState('');
	const handleChange = (e) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 1000000),
			text: input,
		});
		setInput('');
	};
	return (
		<form onSubmit={handleSubmit} className="todo-form">
			<input type="text" name="text" placeholder="What's your plan?" value={input} onChange={handleChange} />
			<button type="submit">Add Todo</button>
		</form>
	);
}

export default TodoForm;
