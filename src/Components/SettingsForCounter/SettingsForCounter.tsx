import React, {ChangeEvent} from "react"
import classes from "../Counter/CounterComponent.module.css"
import classesSet from "./SettingsForCounter.module.css"
import {Button} from "../DefaultComponent/Button";

type SettingsForCounterPropsType = {
    maxCounter: number
    minCounter: number
    setMaxCounter: (e: number) => void
    setMinCounter: (e: number) => void
    setSettingsVisible: (e: boolean) => void
}

export const SettingsForCounter = ({
                                       maxCounter,
                                       minCounter,
                                       setMaxCounter,
                                       setMinCounter,
                                       ...props
                                   }: SettingsForCounterPropsType) => {

    //Проверяем и сетаем max
    const inpMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxNum = parseInt(e.currentTarget.value)

        maxNum > minCounter &&
        setMaxCounter(maxNum)
    }

    //Проверяем и сетаем min
    const inpMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const minNum = parseInt(e.currentTarget.value)

        minNum < maxCounter && minNum >= 0 &&
        setMinCounter(minNum)
    }

    return (
        <div className={classes.container}>
            <div className={` ${classesSet.settCont} ${classesSet.inputsCont}`}>
                Min
                <input type="number"
                       value={minCounter}
                       onChange={inpMinHandler}
                />
                Max
                <input type="number"
                       value={maxCounter}
                       onChange={inpMaxHandler}
                />
            </div>
            <div className={`${classes.btnCont} ${classesSet.btnSet}`}>
                <Button style={classes.btn} callback={() => props.setSettingsVisible(false)} name={"Save"}/>
            </div>
        </div>
    )
}