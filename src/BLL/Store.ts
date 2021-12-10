import React from "react"
import {combineReducers, createStore} from "redux";
import {counterReducer} from "./Reducers/CounterReducer";

const RootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof RootReducer>

export const store = createStore(RootReducer)


