import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../store/todoSlice';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(
            updateTodo({
                id: todo.id,
                changes: { completed: !todo.completed },
            })
        );
    };

    const deleteItem = () => {
        dispatch(deleteTodo(todo.id));
    };

    return (
        <div className='todo'>
            <input
                type='checkbox'
                value={todo.completed}
                onChange={toggle}
            />
            <span>{todo.text}</span>
            <button onClick={deleteItem}>X</button>
        </div>
    );
};

export default TodoItem;
