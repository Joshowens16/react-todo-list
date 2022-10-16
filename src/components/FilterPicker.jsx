import React from 'react';

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
    borderRadius: "50%",
    border:"1px solid black",
    height: "15px"
}
const completed = {
    backgroundColor:"#1E90FF",
    color: "white",
    borderRadius: "50%",
    height: "15px",
    border:"1px solid black",
}

const filterPicker = (props) => {
    return (
        <div style={singleTodo}>
        <button
            onClick={props.clickToDo}
            style={!props.done ? notCompleted : completed}
        />
        <div style={props.done ? strikeStyle : normalList}>{props.todo}</div>
    </div>
    )
}

export default filterPicker

