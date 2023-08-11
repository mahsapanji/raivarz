import { combineReducers } from "@reduxjs/toolkit";
import { AdvReducer } from "./entities/adv";

const rootReducer = combineReducers({
    advs: AdvReducer,
});
export default rootReducer;
