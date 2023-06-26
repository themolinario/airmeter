import {configureStore} from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataReducer";

export const dataStore = configureStore({
    reducer: dataReducer
})