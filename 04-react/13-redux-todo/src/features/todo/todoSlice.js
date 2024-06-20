import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [ {id : 1, text : "Learn React"},]
}

export const todoSlice = createSlice ({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload,
            }
            state.todos.push(todo);
        },
        removetodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        },
    }
})

export const {addTodo, removetodo} = todoSlice.actions;

export default todoSlice.reducer;