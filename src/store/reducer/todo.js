import { createSlice } from "@reduxjs/toolkit";


const initialTodoState = {
    isLoading : false,
    data : []
}

const todoSlice = createSlice({
    name : "todo",
    initialState : initialTodoState,
    reducers : {
        getTodo(state, action) {
            state.data = action.payload;
        },
        loadingHandler(state) {
            console.log("In loadingHandler");
            state.isLoading = !state.isLoading
        }
    }
})

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;