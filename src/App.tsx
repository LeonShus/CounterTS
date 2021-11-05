import React, {useState} from "react"
import classes from "./App.module.css"
import {CounterComponent} from "./Components/CounterComponent";

function App() {

    const [counter, setCounter] = useState<number>(0)
    const maxCounter = 2

    const incCounter = () => {
        if(counter < maxCounter){
            setCounter(counter + 1)
        }
    }
    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <div className={classes.container}>
            <CounterComponent counter={counter}
                              incCounter={incCounter}
                              resetCounter={resetCounter}
                              maxCounter={maxCounter}/>
        </div>
    );
}

export default App;
