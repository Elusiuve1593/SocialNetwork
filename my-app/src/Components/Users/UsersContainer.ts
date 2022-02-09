import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, usersReducer, usersType, userType} from "../Redax/users_reducer";
import {AppStateType} from "../Redax/redux-store";
import {Dispatch} from "redux";

export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    users: userType[]
}
export type MapDispatchToPropsType = {
    follow: (id: string | number) => void
    unFollow: (id: string | number) => void
    setUsers: (users: userType[]) => void
}

export function MapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersReducer.users
    }
}

export function MapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        follow: (id: string | number) => {
            dispatch(followAC(id))
        },
        unFollow: (id: string | number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: userType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)