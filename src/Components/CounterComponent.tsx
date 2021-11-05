import React from "react"
import classes from "./CounterComponent.module.css"
import {Button} from "./DefaultComponent/Button";

type CounterComponentType = {
    counter: number
    incCounter: () => void
    resetCounter: () => void
    maxCounter: number
}

export const CounterComponent = ({counter, incCounter, resetCounter, maxCounter}: CounterComponentType) => {

    const disableFunc = (n: number) => counter === n

    const maxCounterStyle = counter === maxCounter ? classes.maxVal : ""

    return (
        <div className={classes.container}>
            <div className={`${maxCounterStyle} ${classes.counter}`}>
                {counter}
            </div>
            <div className={classes.btnCont}>
                <Button disabled={disableFunc(maxCounter)} callback={incCounter} name={"Inc"}/>
                <Button disabled={disableFunc(0)} callback={resetCounter} name={"Reset"}/>
            </div>

        </div>
    )
}