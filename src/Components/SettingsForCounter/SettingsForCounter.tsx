import React, {ChangeEvent} from "react"
import classes from "../Counter/CounterComponent.module.css";
import {Button} from "../DefaultComponent/Button";

type SettingsForCounterPropsType = {
    maxCounter: number
    minCounter: number
    setMaxCounter: (e: number) => void
    setMinCounter: (e: number) => void
}

export const SettingsForCounter = ({
                                       maxCounter,
                                       minCounter,
                                       setMaxCounter,
                                       setMinCounter
                                   }: SettingsForCounterPropsType) => {

    const inpMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxNum = parseInt(e.currentTarget.value)

        maxNum > minCounter &&
        setMaxCounter(maxNum)
    }

    const inpMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const minNum = parseInt(e.currentTarget.value)

        minNum < maxCounter && minNum >= 0 &&
        setMinCounter(minNum)
    }

    return (
        <div className={classes.container}>
            <div className={` ${classes.counter}`}>
                <input type="number"
                       value={minCounter}
                       onChange={inpMinHandler}
                />
                <input type="number"
                       value={maxCounter}
                       onChange={inpMaxHandler}
                />
            </div>
            <div className={classes.btnCont}>
                <Button style={classes.btn} callback={() => alert("weqwe")} name={"Set"}/>
            </div>
        </div>
    )
}