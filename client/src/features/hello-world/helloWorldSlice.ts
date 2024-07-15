import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import config from '../../utils/config';

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

export const fetchHelloWorld = createAsyncThunk<any>('helloWorld/fetchHelloWorld', async () => {
    try {
        const response = await fetch(config.apiURL + '/hello_world');
        const data = await response.json();
        return {"value":data};
    } catch(err: any) {
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
            .addCase(fetchHelloWorld.pending, (state) => {
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
                state.error = action.error.message ?? "An unknown error occurred."
                state.status = 'rejected'
                state.value = 'There was an error with the server.'
                
            })

    },
    selectors: {
        selectHelloWorld: helloWorld => helloWorld.value
    }
});



export const { selectHelloWorld } = helloWorldSlice.selectors