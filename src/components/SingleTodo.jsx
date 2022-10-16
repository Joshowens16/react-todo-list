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
    borderRadius: "12px",
    border:"1px solid black"
}
const completed = {
    backgroundColor:"#17B169",
    color: "white",
    borderRadius: "8px",
    border:"1px solid black",
    opacity: "70%"
}
const SingleToDo = ({ todo, filter }) => {
	const [done, setDone] = useState(false);
	function clickToDo() {
		setDone(!done); 
	}

    if (filter === 'complete'){
        return done ? (
            <div style={singleTodo}>
            <button
                onClick={clickToDo}
                style={!done ? notCompleted : completed}
            />
            <div style={done ? strikeStyle : normalList}>{todo}</div>
        </div>
        ) : (' ')
    }  else if (filter === 'active') {
        return !done ? (
            <div style={singleTodo}>
            <button
                onClick={clickToDo}
                style={!done ? notCompleted : completed}
            />
            <div style={done ? strikeStyle : normalList}>{todo}</div>
        </div>
        ) : (' ') 
    } else {
        return (
            <div style={singleTodo}>
                <button
                    onClick={clickToDo}

                    style={!done ? notCompleted: completed}
                />
                <div style={done ? strikeStyle : normalList}>{todo}</div>
            </div>
            )
    }
};

export default SingleToDo;
