import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const advSlice = createSlice({
    name: "adv",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.value.push(action.payload);
        },

        // postUpdated(state, action) {
        //     const { id, fullName, detail, access, status } = action.payload;
        //     const existingUser = state.value.find((post) => post.id === id);
        //     if (existingUser) {
        //         existingUser.fullName = fullName;
        //         existingUser.detail = detail;
        //         existingUser.status = status;

        //         existingUser.access = access;
        //     }
        // },

        // userDel(state, action) {
        //     state.value = state.value.filter((id) => id.id !== action.payload);
        // },
    },
});
export const { postAdded } = advSlice.actions;

export const AdvReducer = advSlice.reducer;
