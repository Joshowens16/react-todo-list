import React, { useState } from 'react';
import FilterPicker from './FilterPicker';

const SingleToDo = (props) => {
	const [done, setDone] = useState(false);
	function clickToDo() {
		setDone(!done); 
	}

    if (props.filter === 'complete'){
        return done ? (
            <FilterPicker 
            clickToDo={clickToDo} 
            done={done} 
            todo={props.todo} 
            />
        ) : null
    }  else if (props.filter === 'active') {
        return !done ? (
            <FilterPicker 
            clickToDo={clickToDo} 
            done={done} 
            todo={props.todo} 
            />
        ) : null 
    } else {
        return (
            <FilterPicker 
            clickToDo={clickToDo} 
            done={done} 
            todo={props.todo}
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