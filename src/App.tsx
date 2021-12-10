import React, {useEffect, useState} from "react"
import classes from "./App.module.css"
import {CounterComponent} from "./Components/Counter/CounterComponent";
import {SettingsForCounter} from "./Components/SettingsForCounter/SettingsForCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/Store";
import {incCountAC} from "./BLL/Reducers/CounterReducer";

function App() {
    const dispatch = useDispatch()
    const countVal = useSelector<AppStateType, number>(state => state.counter.value)

    const [settingsVisible, setSettingsVisible] = useState<boolean>(false)
    const [maxCounter, setMaxCounter] = useState<number>(5)
    const [minCounter, setMinCounter] = useState<number>(0)

    // const [counter, setCounter] = useState<number>(minCounter)

    //Забираем значениея из LocalStorage
    // useEffect(() => {
    //     let localCount = localStorage.getItem('Counter Value')
    //     let localMax = localStorage.getItem('MaxCounter Value')
    //     let localMin = localStorage.getItem('MinCounter Value')
    //     localCount &&
    //     setCounter(parseInt(localCount))
    //
    //     localMax &&
    //     setMaxCounter(parseInt(localMax))
    //
    //     localMin &&
    //     setMinCounter(parseInt(localMin))
    // },[])

    //Обновляем LocalStorage
    // useEffect(() => {
    //     localStorage.setItem('Counter Value', JSON.stringify(counter))
    //     localStorage.setItem('MinCounter Value', JSON.stringify(minCounter))
    //     localStorage.setItem('MaxCounter Value', JSON.stringify(maxCounter))
    // }, [counter,minCounter,maxCounter])


    const incCounter = () => {
        if (countVal < maxCounter) {
            dispatch(incCountAC())
        }
    }
    const resetCounter = () => {
        // setCounter(minCounter)
    }

    return (
        <div className={classes.container}>
            {!settingsVisible &&
            <CounterComponent counter={countVal}
                              incCounter={incCounter}
                              resetCounter={resetCounter}
                              maxCounter={maxCounter}
                              minCounter={minCounter}
                              // setCounter={setCounter}
                              setSettingsVisible={setSettingsVisible}
            />}


            {settingsVisible &&
            <SettingsForCounter maxCounter={maxCounter}
                                minCounter={minCounter}
                                setMaxCounter={setMaxCounter}
                                setMinCounter={setMinCounter}
                                setSettingsVisible={setSettingsVisible}
            />}
        </div>
    );
}

export default App;
