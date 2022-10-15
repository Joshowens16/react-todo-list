import React, { useState } from 'react';

const singleTodo = {
    display: "flex",
    flexdirection: "row",
    borderBottom: "1px solid black",
    margin: "5px",
    fontFamily: "'Roboto', arial"
}
const strikeStyle = {
	textDecorationLine: 'line-through',
    fontStyle: "italic",
    opacity: '20%',
    fontFamily: "'Roboto', arial",
    marginLeft: "5px"
};
const normalList = {
    fontFamily: "'Roboto', arial",
    marginLeft: "5px"
}

const SingleToDo = ({ todo }) => {
	const [done, setDone] = useState(false);
	function clickToDo() {
		setDone(!done); 
	}

	return (
		<div style={singleTodo}>
			<input
				type="button"
				className="check"
				onClick={clickToDo}
				value={done ? "✔" : "  "} 
			/>
			<div style={done ? strikeStyle : normalList}>{todo}</div>
		</div>
	);
};

export default SingleToDo;