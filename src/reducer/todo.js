import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// custom data fetch action
export const getTodo = createAsyncThunk("getTodo", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json();
})

const initialTodoState = {
    isLoading : false,
    data : [],
    isError : false
}

const todoSlice = createSlice({
    name : "todo",
    initialState : initialTodoState,
    extraReducers : (builder) => {
        builder.addCase(getTodo.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getTodo.rejected, (state) => {
            state.isError = true;
        })
    }
})

export default todoSlice.reducer;