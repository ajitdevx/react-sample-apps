import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";

const initialValue = [
    {
        id: uuidv4(),
        title: 'Complete Billing details',
        createdAt: new Date(),
        isCompleted: false
    },
    {
        id: uuidv4(),
        title: 'Give Payment to Mr.X',
        createdAt: new Date(),
        isCompleted: false
    },
    {
        id: uuidv4(),
        title: 'Purchase Book',
        createdAt: new Date(),
        isCompleted: true
    },
    {
        id: uuidv4(),
        title: 'Pay EB bill',
        createdAt: new Date(),
        isCompleted: false
    }
];

const TodoApp = () => {
    const [todos, setTodos] = useState(initialValue);
    const [isEditMode, setIsEditMode] = useState(false);
    const [todoToEdit, setTodoToEdit] = useState(null);
    const [statusFilter, setStatusFilter] = useState('All');

    const handleToggleChange = (id) => {
        const updatedTodos = todos.map(todo => {
            if(todo.id === id)
                return {...todo, isCompleted:!todo.isCompleted}
            else
            return todo;
        });

        setTodos(updatedTodos)
    };

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
    }

    const filteredTodos = todos.filter(todo => {
        if(statusFilter === 'All') return todo;
        else if(statusFilter === 'Completed') return todo.isCompleted;
        else if(statusFilter === 'Pending') return !todo.isCompleted;
    })

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    const editTodo = (id) => {
        const todo = todos.find(x => x.id === id);
        setTodoToEdit(todo);
        setIsEditMode(true);
    }

    const updateTodo = (title) => {
        const updatedTodos = todos.map(t => {
            if (t.id == todoToEdit.id)
                return { ...t, title };
            return t;
        })
        setTodos(updatedTodos);
        setTodoToEdit(null);
        setIsEditMode(false);
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(x => x.id !== id);
        setTodos(updatedTodos);
        toast.success('Todo deleted successfully', {
            position: "bottom-right"
        });
    }

    const noOfCompletedTodos = todos.filter(x => x.isCompleted == true).length;

    return (
        <div className="container">
            <TodoHeader />
            <TodoBody 
            addTodo={addTodo} 
            todoToEdit={todoToEdit} 
            isEditMode={isEditMode} 
            updateTodo={updateTodo} />

            <TodoFilter
                noOfCompletedTodos={noOfCompletedTodos}
                noOfTotalTodos={todos.length}
                handleStatusChange={handleStatusChange} />
            <TodoList 
            todos={filteredTodos} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo} 
            handleToggleChange={handleToggleChange} />
        </div>
    )
}

export default TodoApp;