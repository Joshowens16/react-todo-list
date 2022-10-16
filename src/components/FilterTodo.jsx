import React from 'react';
// Style element that puts a shadow around the selected filter button
const selected = {
    boxShadow: "0px 0px 10px 1px gray"
}
/**
 * Function that determines the value of the "filter" value, which is passed to
 * the "SingleTodo" component.
 * @param {*} param0 
 * @returns The value of "filter".
 */
const FilterTodo = ({ filter, setFilter }) => {
    return (
        <div className="filter-buttons">
{/* If 'All' is selected, the value of filter is 'all' */}
            <button 
                className="filter-btn" 
                style={ filter === "all" ? selected : null } value="all" 
                onClick={(btn)=> setFilter(btn.target.value)}>
                    All
            </button>
{/* If 'Active' is selected, the value of filter is 'active' */}
            <button 
                className="filter-btn" 
                style={ filter === "active" ? selected : null } 
                value="active" 
                onClick={(btn)=> setFilter(btn.target.value)}>
                    Active
            </button>
{/* If 'Completed' is selected, the value of filter is 'complete' */}
            <button 
                className="filter-btn" 
                style={ filter === "complete" ? selected : null } 
                value="complete"
                onClick={(btn)=> setFilter(btn.target.value)}>
                    Completed
            </button>
        </div>
    );
};

export default FilterTodo;