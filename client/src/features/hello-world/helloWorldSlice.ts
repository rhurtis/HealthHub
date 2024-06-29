import { createSlice, createAsyncThunk, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";


export interface HelloWorldSliceState {
    value: string;
    status: "idle" | "pending" | "rejected";
    error: string | null;
}

const initialState: HelloWorldSliceState = {
    value: "Not Fetched",
    status: "idle",
    error: null
}

export const fetchHelloWorld = createAsyncThunk<HelloWorldSliceState>('helloWorld/fetchHelloWorld', async () => {
    try {
        const response = await fetch('http://localhost:5005/hello_world');
        const data = await response.json();
        return {"value":data};
    } catch(err) {
        if (!err.response) {
            throw err
          }
        return isRejectedWithValue(err.response.data)
    }
    
})

//https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results

export const helloWorldSlice = createSlice({
    name: 'helloWorld',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchHelloWorld.pending, (state, action) => {
                state.value = 'loading'
                state.error = null
                state.status = 'pending'
            })
            .addCase(fetchHelloWorld.fulfilled, (state, action) => {
                state.value = action.payload.value
                state.error = null
                state.status = 'idle'
                
            })
            .addCase(fetchHelloWorld.rejected, (state, action) => {
                state.error = action.error.message
                state.status = 'rejected'
                state.value = 'There was an error with the server.'
                
            })

    },
    selectors: {
        selectHelloWorld: helloWorld => helloWorld.value
    }
});



export const { selectHelloWorld } = helloWorldSlice.selectors