export type initialStateType = {
    id: number
    email: null | string
    login: string
    isAuth: boolean
}

const initialState = {
    id: 0,
    email: null,
    login: 'Your Profile',
    isAuth: false
}

export function authReducer(state: initialStateType = initialState, action: setUserDataType): initialStateType {
    switch (action.type) {
        case "AUTH_REDUCER": {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default:
            return state
    }
}

export type setUserDataType = ReturnType<typeof setUserData>

export function setUserData(data: initialStateType) {
    return {
        type: "AUTH_REDUCER",
        data
    } as const
}