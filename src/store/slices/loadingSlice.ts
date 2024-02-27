import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {requestCount:0},
    reducers: {
        increaseRequestCount: (state) => {
            state.requestCount += 1;
        },
        decreaseRequestCount: (state) => {
            state.requestCount -= 1;
        },
    },
});

export const loadingReducer = loadingSlice.reducer;
export const {increaseRequestCount, decreaseRequestCount} = loadingSlice.actions;