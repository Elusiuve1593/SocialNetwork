import React from "react";
import {LoginReduxForm} from "./LoginForm";

export type FormDataType = {
    onSubmit: () => void
    input: string
    password: string
    checkbox: boolean
}

export function Login(props: any) {
    const onSubmit = () => {

    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}