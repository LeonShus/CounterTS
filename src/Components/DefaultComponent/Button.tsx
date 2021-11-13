import React from "react"

type ButtonType = {
    name: string
    callback: () => void
    disabled?: boolean
    style: string
}

export const Button = ({name, callback, disabled, style}: ButtonType) => {
    return (
        <button className={style} disabled={disabled} onClick={callback}>{name}</button>
    )
}