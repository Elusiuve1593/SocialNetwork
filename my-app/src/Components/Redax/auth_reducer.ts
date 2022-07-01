import {api} from "../Axios/axios";
import {Dispatch} from "redux";

export type initialStateType = {
    useId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const initialState = {
    useId: null,
    email: null,
    login: null,
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

export function setUserData(id: string, email: string, login: string, isAuth: boolean) {
    return {
        type: "AUTH_REDUCER",
        payload: {id, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => {
    return async (dispatch: Dispatch) => {
        const res = await api.me()
        if (res.data.resultCode === 0) {
            let {id, login, email} = res.data.data
            dispatch(setUserData(id, email, login, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: Dispatch) => {
        let res = await api.userLogin(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(setUserData('', '', '', true))
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch) => {
        const res = await api.logout()
        if (res.data.resultCode === 0) {
            dispatch(setUserData('', '', '', false))
        }
    }
}