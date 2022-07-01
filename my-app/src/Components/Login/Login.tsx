import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../Redax/auth_reducer";
// @ts-ignore
import {Redirect} from "react-router-dom"
import {AppStateType} from "../Redax/redux-store";
import {mapStateToPropsType} from "../Header/HeaderContainer";

export type FormDataType = {
    onSubmit: () => void
    email: string
    password: string
    rememberMe: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

function Login(props: any) {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/content"}/>
    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)
