import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodoReducer: (state, action) => {
            const newTodo = {
                id: action.payload.id,
                title: action.payload.todo,
                isCompleted: false
            };
            state.unshift(newTodo);
        },
        removeTodoReducer: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        toogleTodoReducer: (state, action) => {
            const currentTodo = state.find((item) => item.id === action.payload.id);
            currentTodo.isCompleted = !currentTodo.isCompleted;
        }
    }
});

export const { addTodoReducer, removeTodoReducer, toogleTodoReducer } = todosSlice.actions;

export default todosSlice.reducer;
