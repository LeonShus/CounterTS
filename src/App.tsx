import React, {useEffect, useState} from "react"
import classes from "./App.module.css"
import {CounterComponent} from "./Components/Counter/CounterComponent";
import {SettingsForCounter} from "./Components/SettingsForCounter/SettingsForCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/Store";
import {incCountAC} from "./BLL/Reducers/CounterReducer";

function App() {
    const dispatch = useDispatch()

    const maxVal = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const minVal = useSelector<AppStateType, number>(state => state.counter.minValue)

    const [settingsVisible, setSettingsVisible] = useState<boolean>(false)

    const resetCounter = () => {
        // setCounter(minCounter)
    }

    return (
        <div className={classes.container}>
            {!settingsVisible &&
            <CounterComponent
                              resetCounter={resetCounter}
                              maxVal={maxVal}
                              minVal={minVal}
                              setSettingsVisible={setSettingsVisible}
            />}


            {settingsVisible &&
            <SettingsForCounter maxVal={maxVal}
                                minVal={minVal}
                                setSettingsVisible={setSettingsVisible}
            />}
        </div>
    );
}

export default App;
