import React, {useState} from "react"
import classes from "./App.module.css"
import {CounterComponent} from "./Components/Counter/CounterComponent";
import {SettingsForCounter} from "./Components/SettingsForCounter/SettingsForCounter";
import {useSelector} from "react-redux";
import {AppStateType} from "./BLL/Store";

function App() {

    const maxVal = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const minVal = useSelector<AppStateType, number>(state => state.counter.minValue)

    const [settingsVisible, setSettingsVisible] = useState<boolean>(false)

    const isSettingsOpen = (par: boolean) => {
        setSettingsVisible(par)
    }

    return (
        <div className={classes.container}>
            {!settingsVisible &&
            <CounterComponent
                maxVal={maxVal}
                minVal={minVal}
                isSettingsOpen={isSettingsOpen}
            />}


            {settingsVisible &&
            <SettingsForCounter maxVal={maxVal}
                                minVal={minVal}
                                isSettingsOpen={isSettingsOpen}
            />}
        </div>
    );
}

export default App;
