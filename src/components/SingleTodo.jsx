import React, { useState } from 'react';

//styling components
const singleTodo = {
    display: "flex",
    flexdirection: "row",
    borderBottom: "1px solid black",
    margin: "10px",
    fontFamily: "'Roboto', arial",
}
const strikeStyle = {
	textDecorationLine: 'line-through',
    fontStyle: "italic",
    opacity: '20%',
    fontFamily: "'Roboto', arial",
    marginLeft: "5px",
    letterSpacing: "1px"
};
const normalList = {
    fontFamily: "'Roboto', arial",
    marginLeft: "5px",
    letterSpacing: "1px"
}

const notCompleted = {
    borderRadius: "8px",
    border:"1px solid black"
}
const completed = {
    backgroundColor:"green",
    color: "white",
    borderRadius: "8px",
    border:"1px solid black"
}
const SingleToDo = ({ todo, filter }) => {
	const [done, setDone] = useState(false);
	function clickToDo() {
		setDone(!done); 
	}

    if (filter === 'complete'){
        return done ? (
            <div style={singleTodo}>
            <input
                type="button"
                className="check"
                onClick={clickToDo}
                value={done ? "✔" : "   "}
                style={!done ? notCompleted : completed}
            />
            <div style={done ? strikeStyle : normalList}>{todo}</div>
        </div>
        ) : (' ')
    }  else if (filter === 'active') {
        return !done ? (
            <div style={singleTodo}>
            <input
                type="button"
                className="check"
                onClick={clickToDo}
                value={done ? "✔" : "   "}
                style={!done ? notCompleted : completed}
            />
            <div style={done ? strikeStyle : normalList}>{todo}</div>
        </div>
        ) : (' ') 
    } else {
        return (
            <div style={singleTodo}>
                <input
                    type="button"
                    className="check"
                    onClick={clickToDo}
                    value={done ? "✔" : "   "}
                    style={!done ? notCompleted: completed}
                />
                <div style={done ? strikeStyle : normalList}>{todo}</div>
            </div>
            )
    }
};

export default SingleToDo;
