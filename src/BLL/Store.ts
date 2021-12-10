import {combineReducers, createStore} from "redux";
import {counterReducer} from "./Reducers/CounterReducer";
import {loadState, saveState} from "../Utils/LocalStorageUtils";

const RootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof RootReducer>


export const store = createStore(RootReducer,loadState())

store.subscribe(() => {
    saveState(store.getState())
})