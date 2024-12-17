import { configureStore } from "@reduxjs/toolkit";
import Counter  from "./Slice";

export const store = configureStore({
    reducer : {
        Counterkey : Counter,
    },
})