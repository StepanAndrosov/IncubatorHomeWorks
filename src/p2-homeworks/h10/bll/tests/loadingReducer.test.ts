import {loadingAC} from "../loadingReducer";

test("should be the correct loading state", () => {

    const initState = {
        isLoading: false
    }

    const copyState = loadingAC(true)

    expect(initState.isLoading).toBe(false)
    expect(copyState.isLoading).toBe(true)
})
