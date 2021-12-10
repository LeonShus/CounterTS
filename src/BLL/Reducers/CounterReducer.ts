

const initState = {
    value: 0,
    minValue: 0,
    maxValue: 5
}

export type ActionType = IncCountAT
export type InitStateType = typeof initState

export const counterReducer = (state: InitStateType = initState, action: ActionType): InitStateType =>{
    switch (action.type){
        case "INC-COUNT":
            return {
                ...state,
                value: state.value + 1
            }
        default:
            return state
    }
}

type IncCountAT = ReturnType<typeof incCountAC>
export const incCountAC = () => ({ type: "INC-COUNT" })