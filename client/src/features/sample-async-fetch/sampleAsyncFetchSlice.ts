import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"
import { fetchSample } from "./sampleAsyncFetchAPI"

export interface SampleAsyncFetchSliceState {
  value: string
  status: "idle" | "loading" | "failed"
}

const initialState: SampleAsyncFetchSliceState = {
  value: "Not Fetched",
  status: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const sampleAsyncFetchSlice = createAppSlice({
  name: "sampleAsyncFetch",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(getSampleAsyncFetch)`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
    getSampleAsyncFetch: create.asyncThunk(
      async () => {
        const response = await fetchSample()
        // The value we return becomes the `fulfilled` action payload
        return response.data
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.value = action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectSampleFetchValue: sampleAsyncFetch => sampleAsyncFetch.value,
    selectStatus: sampleAsyncFetch => sampleAsyncFetch.status,
  },
})

// Action creators are generated for each case reducer function.
export const { getSampleAsyncFetch } =
sampleAsyncFetchSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectSampleFetchValue, selectStatus } = sampleAsyncFetchSlice.selectors

