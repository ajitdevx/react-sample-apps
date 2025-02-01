import PropTypes from "prop-types";

const TodoFilter = ({ noOfCompletedTodos, noOfTotalTodos, handleStatusChange }) => {
    return (
        <div className="todo-filter">
            <h6>{noOfCompletedTodos} of {noOfTotalTodos} items completed</h6>
            <select onChange={handleStatusChange}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>

    )
}

TodoFilter.propTypes = {
    noOfCompletedTodos: PropTypes.number,
    noOfTotalTodos: PropTypes.number,
    handleStatusChange: PropTypes.func
}

export default TodoFilter;