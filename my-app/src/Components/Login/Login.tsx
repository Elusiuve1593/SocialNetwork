import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../Redax/auth_reducer";
import {AppStateType} from "../Redax/redux-store";
import {Redirect} from "react-router-dom";

export type FormDataType = {
    onSubmit: () => void
    email: string
    password: string
    rememberMe: boolean
}

export function Login() {
    const isAuth = useSelector<AppStateType>(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }
    if(isAuth){
        return <Redirect to={"/content"}></Redirect>
    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}