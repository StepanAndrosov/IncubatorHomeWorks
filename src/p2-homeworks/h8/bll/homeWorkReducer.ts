export type PersonType = { _id: number, name: string, age: number }

export type ActionSortType = {
    type: "sort"
    payload: "up" | "down"
}
export type ActionCheckType = {
    type: "check"
    payload: number
}

export const homeWorkReducer = (state: Array<PersonType>, action: ActionSortType | ActionCheckType): Array<PersonType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state.sort((a, b) =>
                action.payload === "up"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name))]
        }
        case 'check': {
            return [...state.filter(p => p.age >= action.payload)]
        }
        default:
            return state
    }
}
export const SortAC = (payload: "up" | "down"): ActionSortType => {
    return {
        type: "sort",
        payload
    }
}
export const CheckAC = (payload: number): ActionCheckType => {
    return {
        type: "check",
        payload
    }
}