import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../Redax/redux-store";
import {initialStateType, setUserData} from "../Redax/auth_reducer";

export class HeaderClassesContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setUserData(response.data.data.login)
            }
        })
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

type HeaderPropsType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
    setUserData: (data: initialStateType) => void
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

export const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderClassesContainer)