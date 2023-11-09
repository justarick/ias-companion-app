import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos);

const todoSlice = createSlice({
    name: 'todos',
    initialState: todoAdapter.getInitialState(),
    reducers: {
        addTodo: todoAdapter.addOne,
        deleteTodo: todoAdapter.removeOne,
        clearTodos: todoAdapter.removeAll,
        updateTodo: todoAdapter.updateOne,
    },
});

export const { addTodo, deleteTodo, clearTodos, updateTodo } =
    todoSlice.actions;

export default todoSlice.reducer;
