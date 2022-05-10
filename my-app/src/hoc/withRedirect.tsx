import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Components/Redax/redux-store";

type mapStateToPropsType = {
    authReducer: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        authReducer: state.authReducer.isAuth
    }
}

export function withRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mapStateToPropsType) {
        let {authReducer, ...restProps} = props
        if (!props.authReducer) {
            return <Redirect to={'/login/'}/>
        }
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}
