import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const submit = () => {
        if (text.length > 0) {
            dispatch(
                addTodo({
                    id: nanoid(),
                    text: text,
                    completed: false,
                })
            );
        }
    };

    return (
        <div>
            <p>Do Stuff!</p>
            <input
                type='text'
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={submit}>Add Todo</button>
        </div>
    );
};

export default AddTodo;
