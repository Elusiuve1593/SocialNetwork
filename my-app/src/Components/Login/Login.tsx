import React from "react";
import {FormDataType, LoginReduxForm} from "./LoginForm";

export function Login(props: FormDataType) {
    const onSubmit = () => {

    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}