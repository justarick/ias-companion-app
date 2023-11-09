import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoSelectors, clearTodos } from '../../store/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(todoSelectors.selectEntities);
    const todoCount = useSelector(todoSelectors.selectTotal);

    const todoList = [];

    for (const id in todos) {
        if (Object.hasOwnProperty.call(todos, id)) {
            const todoItem = todos[id];
            todoList.push(
                <TodoItem
                    key={todoItem.id}
                    todo={todoItem}
                />
            );
        }
    }

    return (
        <div className='todo-list'>
            <h3>Todo List</h3>
            <h4>Count: {todoCount}</h4>
            <button
                className='delete-btn'
                onClick={() => {
                    dispatch(clearTodos());
                }}>
                Clear all Todos
            </button>
            <div>{todoList}</div>
        </div>
    );
};

export default TodoList;
