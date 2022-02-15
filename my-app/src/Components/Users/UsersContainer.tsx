import {connect} from "react-redux";
import {currentPageAC, followAC, setUsersAC, setUsersTotalCountAC, unfollowAC, userType} from "../Redax/users_reducer";
import {AppStateType} from "../Redax/redux-store";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {UsersComponent} from "./UsersComponent";


export type onClickHandlerType = {
    onClickHandler: (i: any) => void
}

class Users extends React.Component<PostsPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onClickHandler = (i: any) => {
        this.props.setCurrentPage(i)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <UsersComponent
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            onClickHandler={this.onClickHandler}
            currentPage={this.props.currentPage}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setUsers={this.props.setUsers}/>

    }
}

export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type MapDispatchToPropsType = {
    follow: (id: string | number) => void
    unFollow: (id: string | number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export function MapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(currentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }

    }
}

export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)