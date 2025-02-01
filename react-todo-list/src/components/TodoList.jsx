import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({todos, deleteTodo, editTodo, handleToggleChange}) => {

    return (
        <>
            <ul id="list-items" className="list-items">
                {
                    todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} handleToggleChange={handleToggleChange} />
                    ))
                }
            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func,
    handleToggleChange: PropTypes.func
  };

export default TodoList;