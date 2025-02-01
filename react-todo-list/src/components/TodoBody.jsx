import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";

const TodoBody = ({ addTodo, todoToEdit, isEditMode, updateTodo }) => {
    const [title, setTitle] = useState(isEditMode ? todoToEdit.title : '');

    useEffect(() => {
        setTitle(isEditMode ? todoToEdit.title : '');
    }, [isEditMode, todoToEdit])

    const handleClick = () => {
        if (!title) {
            toast.error('Please enter a title', {
                position: "bottom-right"
            });
            return;
        }

        if (isEditMode) {
            updateTodo(title);
        }
        else {
            const newTodo = {
                id: uuidv4(),
                title: title,
                createdAt: new Date(),
                isCompleted: false
            }
            addTodo(newTodo);
        }

        setTitle('')
        toast.success('Task added successfully', {
            position: "bottom-right"
        });
    }

    return (
        <div className="todo-body">
            <input
                type="text"
                name="todo-title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Add your items"
            />
            <button type="button" onClick={handleClick}>
                <i className="fas fa-plus" />
            </button>
        </div>
    )
}

TodoBody.propTypes = {
    addTodo: PropTypes.func,
    updateTodo: PropTypes.func,
    isEditMode: PropTypes.bool,
    todoToEdit: PropTypes.object
}

export default TodoBody;