import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {getAuthUserData, initialStateType, logout} from "../Redux/auth_reducer";


export class HeaderClassesContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        )
    }
}

type HeaderPropsType = mapDispatchToPropsType & mapStateToPropsType

export type mapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void

}
export type mapStateToPropsType = {
    isAuth: boolean
    login?: string | null
}

export function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {getAuthUserData, logout})(HeaderClassesContainer)