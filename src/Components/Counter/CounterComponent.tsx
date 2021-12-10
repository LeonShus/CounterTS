import React, {useEffect} from "react"
import classes from "./CounterComponent.module.css"
import {Button} from "../DefaultComponent/Button";

type CounterComponentType = {
    counter: number
    incCounter: () => void
    resetCounter: () => void
    maxCounter: number
    minCounter: number
    // setCounter: (e: number) => void
    setSettingsVisible: (e: boolean) => void
}

export const CounterComponent = ({
                                     counter, incCounter, resetCounter,
                                     maxCounter, minCounter, ...props
                                 }: CounterComponentType) => {

    //Проверка на валидный counter
    // useEffect(() => {
    //     counter > maxCounter &&
    //     props.setCounter(maxCounter)
    //
    //     counter < minCounter &&
    //     props.setCounter(minCounter)
    //
    // }, [maxCounter, minCounter])

    const disableFunc = (n: number) => counter === n

    //Стиль maxCounter
    const maxCounterStyle = counter >= maxCounter ? classes.maxVal : ""

    return (
        <div className={classes.container}>
            <div className={`${maxCounterStyle} ${classes.counter}`}>
                {counter}
            </div>
            <div className={classes.btnCont}>
                <Button style={classes.btn} disabled={disableFunc(maxCounter)} callback={incCounter} name={"Inc"}/>
                <Button style={classes.btn} disabled={disableFunc(minCounter)} callback={resetCounter} name={"Reset"}/>
                <Button style={classes.btn} callback={() => props.setSettingsVisible(true)} name={"Set"}/>
            </div>

        </div>
    )
}