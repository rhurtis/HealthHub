import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface CounterSliceState {
    value: number
}

const initialState: CounterSliceState = {
    value: 0,
}

export const counterSlice = createAppSlice({
    name: "counter",
    initialState,
    reducers: create => ({
        increment: create.reducer(state => {
            state.value += 1
        })
    }),
    selectors: {
        selectCount: counter => counter.value,
    }

})

// Action creators are generated for each case reducer function.
export const { increment } = counterSlice.actions

export const { selectCount } = counterSlice.selectors

