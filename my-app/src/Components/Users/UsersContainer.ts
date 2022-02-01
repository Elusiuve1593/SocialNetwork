import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, unfollowAC, usersReducer, usersType} from "../Redax/users_reducer";
import {AppStateType} from "../Redax/redux-store";
import {Dispatch} from "redux";

export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    users: usersType[]
}
export type MapDispatchToPropsType = {
    follow: (id: string) => void
    unFollow: (id: string) => void
}

export function MapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersReducer.users
    }
}

export function MapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unFollow: (id: string) => {
            dispatch(unfollowAC(id))
        },
    }
}


export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)