import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodoReducer: (state, action) => {
            const newTodo = {
                id: action.payload.id,
                title: action.payload.todo,
                isCompleted: false
            };
            state.todos.unshift(newTodo);
        },
        removeTodoReducer: (state, action) => {
            /// START WORK FROME HERE!!
            state.todos = state.todos.filter((item) => item.id !== action.payload.id);
        },
        toogleTodoReducer: (state, action) => {
            const currentTodo = state.todos.find((item) => item.id === action.payload.id);
            currentTodo.isCompleted = !currentTodo.isCompleted;
        }
    }
});

export const { addTodoReducer, removeTodoReducer, toogleTodoReducer } = todosSlice.actions;

export default todosSlice.reducer;
