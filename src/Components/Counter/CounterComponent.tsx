import React, {useEffect} from "react"
import classes from "./CounterComponent.module.css"
import {Button} from "../DefaultComponent/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../BLL/Store";
import {incCountAC, setCountValueAC} from "../../BLL/Reducers/CounterReducer";

type CounterComponentType = {
    maxVal: number
    minVal: number
    isSettingsOpen: (par: boolean) => void
}

export const CounterComponent = ({
                                     maxVal, minVal, isSettingsOpen
                                 }: CounterComponentType) => {

    const dispatch = useDispatch()
    const countVal = useSelector<AppStateType, number>(state => state.counter.value)

    const incCounter = () => {
        if (countVal < maxVal) {
            dispatch(incCountAC())
        }
    }

    const resetCount = () => {
        dispatch(setCountValueAC(minVal))
    }

    //Проверка на валидный counter
    useEffect(() => {
        countVal > maxVal &&
        dispatch(setCountValueAC(maxVal))

        countVal < minVal &&
        dispatch(setCountValueAC(minVal))

    }, [maxVal, minVal])

    const disableFunc = (n: number) => countVal === n

    //Стиль maxCounter
    const maxCounterStyle = countVal >= maxVal ? classes.maxVal : ""

    return (
        <div className={classes.container}>
            <div className={`${maxCounterStyle} ${classes.counter}`}>
                {countVal}
            </div>
            <div className={classes.btnCont}>
                <Button style={classes.btn} disabled={disableFunc(maxVal)} callback={incCounter} name={"Inc"}/>
                <Button style={classes.btn} disabled={disableFunc(minVal)} callback={resetCount} name={"Reset"}/>
                <Button style={classes.btn} callback={() => isSettingsOpen(true)} name={"Set"}/>
            </div>

        </div>
    )
}