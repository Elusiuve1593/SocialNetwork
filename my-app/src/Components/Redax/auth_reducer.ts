import {Dispatch} from "redux";
import {api} from "../Axios/axios";

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
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export type setUserDataType = ReturnType<typeof setUserData>

export function setUserData(userId: number, email: string, login: string, isAuth: boolean) {
    return {
        type: "AUTH_REDUCER",
        payload: {userId, email, login, isAuth}
    } as const
}

export const authThunk = () => {
    return (dispatch: Dispatch) => {
        api.authStatus()
            .then(res => {
                if (res.data.resultCode === 0) {
                    const {userId, email, login} = res.data.data
                    dispatch(setUserData(userId, email, login, true))
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        api.login(email, password, rememberMe)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(authThunk())
                }
            })
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        api.logout()
            .then(res => {
                    if (res.data.resultCode === 0) {
                        // @ts-ignore
                        dispatch(setUserData(null, null, null, false))
                    }
                }
            )
    }
}