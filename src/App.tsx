import React, {useState} from "react"
import classes from "./App.module.css"
import {CounterComponent} from "./Components/Counter/CounterComponent";
import {SettingsForCounter} from "./Components/SettingsForCounter/SettingsForCounter";

function App() {

    const [maxCounter, setMaxCounter] = useState<number>(5)
    const [minCounter, setMinCounter] = useState<number>(1)

    const [counter, setCounter] = useState<number>(minCounter)


    const incCounter = () => {
        if (counter < maxCounter) {
            setCounter(counter + 1)
        }
    }
    const resetCounter = () => {
        setCounter(minCounter)
    }

    return (
        <div className={classes.container}>
            <CounterComponent counter={counter}
                              incCounter={incCounter}
                              resetCounter={resetCounter}
                              maxCounter={maxCounter}
                              minCounter={minCounter}
                              setCounter={setCounter}
            />


            <SettingsForCounter maxCounter={maxCounter}
                                minCounter={minCounter}
                                setMaxCounter={setMaxCounter}
                                setMinCounter={setMinCounter}
            />
        </div>
    );
}

export default App;
