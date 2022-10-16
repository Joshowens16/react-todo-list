import React from 'react';
const filterButtons = {
    padding: "10px"
}
const btn = {
    margin: "10px",
    width: "80px"
}
const selected = {
    margin: "10px",
    width: "80px",
    boxShadow: "0px 0px 10px 1px gray"
}
const FilterTodo = ({ filter, setFilter }) => {
    return (
        <div style={filterButtons}>
            <button style={filter === "all" ? selected :btn} value="all" onClick={(btn)=> setFilter(btn.target.value)}>
                All
            </button>
            <button style={filter === "active" ? selected : btn} value="active" onClick={(btn)=> setFilter(btn.target.value)}>
                Active
            </button>
            <button style={filter === "complete" ? selected : btn} value="complete" onClick={(btn)=> setFilter(btn.target.value)}>
                Completed
            </button>
        </div>
    );
};

export default FilterTodo;