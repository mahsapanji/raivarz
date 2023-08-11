import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const advSlice = createSlice({
    name: "adv",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.value.push(action.payload);
        },

   

        advDel(state, action) {
            state.value = state.value.filter((id) => id.id !== action.payload);
        },
    },
});
export const { postAdded ,advDel} = advSlice.actions;

export const AdvReducer = advSlice.reducer;
