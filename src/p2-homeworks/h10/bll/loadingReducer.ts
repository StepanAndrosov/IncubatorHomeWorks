export type LoadingType = {
    isLoading: boolean
}

type loadingAT = {
    type: "LOADING",
    isLoading: boolean
}

const initState = {
    isLoading: false
}

type ActionType = loadingAT

export const loadingReducer = (state: LoadingType = initState, action: ActionType): LoadingType => {
    switch (action.type) {
        case "LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): loadingAT => ({type: "LOADING", isLoading})

