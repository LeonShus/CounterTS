import React from "react"

type ButtonType = {
    name: string
    callback: () => void
    disabled?: boolean
}

export const Button = ({name, callback, disabled}: ButtonType) => {
    return (
        <button disabled={disabled} onClick={callback}>{name}</button>
    )
}