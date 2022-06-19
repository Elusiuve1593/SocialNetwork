import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../Redax/redux-store";
import {authThunk, initialStateType} from "../Redax/auth_reducer";

export class HeaderClassesContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.authThunk()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

type HeaderPropsType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
    authThunk: () => void
}
export type mapStateToPropsType = {
    isAuth: boolean
    login: string

}

export function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {authThunk})(HeaderClassesContainer)