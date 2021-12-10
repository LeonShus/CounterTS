

const initState = {
    value: 0,
    minValue: 0,
    maxValue: 5
}
export type InitStateType = typeof initState
export type ActionType = IncCountAT | SetCountValueAT | SetMaxValueAT | SetMinValueAT

export const counterReducer = (state: InitStateType = initState, action: ActionType): InitStateType =>{
    switch (action.type){
        case "INC-COUNT":
            return {
                ...state,
                value: state.value + 1
            }
        case "SET-COUNT-VALUE":
            return {
                ...state,
                value: action.value
            }
        case "SET-MAX-VALUE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        case "SET-MIN-VALUE":
            return {
                ...state,
                minValue: action.minValue
            }
        default:
            return state
    }
}

type IncCountAT = ReturnType<typeof incCountAC>
export const incCountAC = () => ({ type: "INC-COUNT" } as const)

type SetCountValueAT = ReturnType<typeof setCountValueAC>
export const setCountValueAC = (value: number) => ({ type: 'SET-COUNT-VALUE', value } as const)

type SetMaxValueAT = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (maxValue: number) => ({ type: "SET-MAX-VALUE", maxValue } as const)

type SetMinValueAT = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (minValue: number) => ({ type: "SET-MIN-VALUE", minValue } as const)