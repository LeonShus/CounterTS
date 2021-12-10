import React, {ChangeEvent} from "react"
import classes from "../Counter/CounterComponent.module.css"
import classesSet from "./SettingsForCounter.module.css"
import {Button} from "../DefaultComponent/Button";
import {useDispatch} from "react-redux";
import {setMaxValueAC, setMinValueAC} from "../../BLL/Reducers/CounterReducer";

type SettingsForCounterPropsType = {
    maxVal: number
    minVal: number
    isSettingsOpen: (e: boolean) => void
}

export const SettingsForCounter = ({
                                       maxVal,
                                       minVal,
                                       isSettingsOpen
                                   }: SettingsForCounterPropsType) => {

    const dispatch = useDispatch()
    //Проверяем и сетаем max
    const inpMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxNum = parseInt(e.currentTarget.value)

        newMaxNum > minVal &&
        dispatch(setMaxValueAC(newMaxNum))
    }

    //Проверяем и сетаем min
    const inpMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinNum = parseInt(e.currentTarget.value)

        newMinNum < maxVal && newMinNum >= 0 &&
        dispatch(setMinValueAC(newMinNum))
    }

    return (
        <div className={classes.container}>
            <div className={` ${classesSet.settCont} ${classesSet.inputsCont}`}>
                Max
                <input type="number"
                       value={maxVal}
                       onChange={inpMaxHandler}
                />
                Min
                <input type="number"
                       value={minVal}
                       onChange={inpMinHandler}
                />
            </div>
            <div className={`${classes.btnCont} ${classesSet.btnSet}`}>
                <Button style={classes.btn} callback={() => isSettingsOpen(false)} name={"Save"}/>
            </div>
        </div>
    )
}