import React, { useState } from 'react';
import FilterPicker from './FilterPicker';

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

//singleTodo, clickToDo, done, notCompleted, completed, todo, strikeStyle, normalList
const SingleToDo = (props) => {
	const [done, setDone] = useState(false);
	function clickToDo() {
		setDone(!done); 
	}

    if (props.filter === 'complete'){
        return done ? (
            <FilterPicker singleTodo={singleTodo} 
            clickToDo={clickToDo} 
            done={done} 
            notCompleted={notCompleted} 
            completed={completed} 
            todo={props.todo} 
            strikeStyle={strikeStyle} 
            normalList={normalList} 
            />
        ) : null
    }  else if (props.filter === 'active') {
        return !done ? (
            <FilterPicker singleTodo={singleTodo} 
            clickToDo={clickToDo} 
            done={done} 
            notCompleted={notCompleted} 
            completed={completed} 
            todo={props.todo} 
            strikeStyle={strikeStyle} 
            normalList={normalList} 
            />
        ) : null 
    } else {
        return (
            <FilterPicker singleTodo={singleTodo} 
            clickToDo={clickToDo} 
            done={done} 
            notCompleted={notCompleted} 
            completed={completed} 
            todo={props.todo} 
            strikeStyle={strikeStyle} 
            normalList={normalList} 
            />
            )
    }
};

export default SingleToDo;


// const SingleToDo = ({ todo, filter }) => {
// 	const [done, setDone] = useState(false);
// 	function clickToDo() {
// 		setDone(!done); 
// 	}

//     if (filter === 'complete'){
//         return done ? (
//             <div style={singleTodo}>
//             <button
//                 onClick={clickToDo}
//                 style={!done ? notCompleted : completed}
//             />
//             <div style={done ? strikeStyle : normalList}>{todo}</div>
//         </div>
//         ) : null
//     }  else if (filter === 'active') {
//         return !done ? (
//             <div style={singleTodo}>
//             <button
//                 onClick={clickToDo}
//                 style={!done ? notCompleted : completed}
//             />
//             <div style={done ? strikeStyle : normalList}>{todo}</div>
//         </div>
//         ) : null 
//     } else {
//         return (
//             <div style={singleTodo}>
//                 <button
//                     onClick={clickToDo}
//                     style={!done ? notCompleted : completed}
//                 />
//                 <div style={done ? strikeStyle : normalList}>{todo}</div>
//             </div>
//             )
//     }
// };