import React from 'react';



const filterPicker = (props) => {
    return (
        <div style={props.singleTodo}>
        <button
            onClick={props.clickToDo}
            style={!props.done ? props.notCompleted : props.completed}
        />
        <div style={props.done ? props.strikeStyle : props.normalList}>{props.todo}</div>
    </div>
    )
}

export default filterPicker

