import React from 'react';

/**
 * Function that displays the UI depending on the value of "filter".
 * @param {*} props 
 * @returns the list of "to-do" items that fit the filter value ('all','active', or 'complete')
 */
const filterPicker = (props) => {
    return (
//Logic that determines whether or not a button should display as completed or not.
        <div className="single-todo">
        <button
            onClick={props.clickToDo}
            className={!props.done ? "not-completed" : "completed"}
        />
{/* Logic that determines whether or not a list item should display as "struck through" (completed) or not. */}
        <div className={props.done ? "strike-style" : "normal-list"}>{props.todo}</div>
    </div>
    )
}

export default filterPicker

