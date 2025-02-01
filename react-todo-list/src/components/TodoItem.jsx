import PropTypes from "prop-types";

const TodoItem = ({ todo, deleteTodo, editTodo, handleToggleChange }) => {
    const handleChange = (id) => {
        handleToggleChange(id);
    }
    return (
        <li>
            <div>
                <label htmlFor={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
                    <input type="checkbox" name="titleCheckbox" id={todo.id}
                        onChange={() => handleChange(todo.id)}
                        checked={todo.isCompleted}                        
                    />
                    {todo.title}
                </label>
                <br />
                <small>{new Date(todo.createdAt).toDateString()}</small>
            </div>
            <div>
                <button type="button" onClick={() => deleteTodo(todo.id)} className="todo-controls">
                    <i className="fas fa-trash" />
                </button>
                <button type="button" onClick={() => editTodo(todo.id)} className="todo-controls">
                    <i className="fas fa-pencil-alt" />
                </button>
            </div>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func,
    handleToggleChange: PropTypes.func
}

export default TodoItem;