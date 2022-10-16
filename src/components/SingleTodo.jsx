import React, { useState } from 'react';
import FilterPicker from './FilterPicker';

/**
 * Function that determines which of the three lists, "All", "Actice", or "Completed" should be displayed.
 * @param {*} props 
 * @returns Children that fit are returned from the logic parameters.
 */

const SingleToDo = (props) => {
	const [done, setDone] = useState(false);
	function clickToDo() {
		setDone(!done); 
	}
//If Filter's value is 'completed', the logic returns the FilterPicker component and the children that have the "done" state.
    if (props.filter === 'complete'){
        return done ? (
            <FilterPicker 
            clickToDo={clickToDo} 
            done={done} 
            todo={props.todo} 
            />
        ) : null
//If Filter's value is 'active', the logic returns the FilterPicker component and the children that have the "not done" state.
    }  else if (props.filter === 'active') {
        return !done ? (
            <FilterPicker 
            clickToDo={clickToDo} 
            done={done} 
            todo={props.todo} 
            />
        ) : null 
//If Filter's value is 'all', the logic returns the FilterPicker component and all children with all states.
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