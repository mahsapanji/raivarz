import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const advSlice = createSlice({
    name: "adv",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.value.push(action.payload);
        },

        postUpdated(state, action) {
            const existingAdv = state.value.find((post) => post.id == action.payload.id
          
            );
            if (existingAdv) {
                existingAdv.addition = action.payload.addition;
                existingAdv.bathroom = action.payload.bathroom;
                existingAdv.bedrooms = action.payload.bedrooms;
                existingAdv.date = action.payload.date;
                existingAdv.descripption = action.payload.descripption;
                existingAdv.garage = action.payload.garage;
                existingAdv.houseNumber = action.payload.houseNumber;
                existingAdv.picture = action.payload.picture;
                existingAdv.postalCode = action.payload.postalCode;
                existingAdv.price = action.payload.price;
                existingAdv.size = action.payload.size;
                existingAdv.streetName = action.payload.streetName;


            }
        },

        advDel(state, action) {
            state.value = state.value.filter((id) => id.id !== action.payload);
        },
    },
});
export const { postAdded ,postUpdated,advDel} = advSlice.actions;

export const AdvReducer = advSlice.reducer;
