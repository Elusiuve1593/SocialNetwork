import {connect} from "react-redux";
import {
    setCurrentPage,
    userType, getUsersThunk, deleteUsersThunk, addUserThunk
} from "../Redax/users_reducer";
import {AppStateType} from "../Redax/redux-store";
import React, {ComponentType} from "react";
import {UsersComponent} from "./UsersComponent";
import {Preloader} from "../Common/Preloader/Preloader";
import {withRedirect} from "../../hoc/withRedirect";
import {compose} from "redux";

export type onClickHandlerType = {
    onClickHandler: (i: any) => void
}

class Users extends React.Component<PostsPropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onClickHandler = (i: any) => {
        this.props.setCurrentPage(i)
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersComponent
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                onClickHandler={this.onClickHandler}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                getUsersThunk={this.props.getUsersThunk}
                deleteUsersThunk={this.props.deleteUsersThunk}
                addUserThunk={this.props.addUserThunk}
                authReducer={this.props.authReducer}
            />
        </>
    }
}

export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching?: boolean
    authReducer: boolean
}

export function MapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        authReducer: state.authReducer.isAuth,
    }
}

export type MapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    deleteUsersThunk: (id: string | number) => void
    addUserThunk: (id: string | number) => void
}

// export function MapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
//     return {
//         follow: (id: string | number) => {
//             dispatch(followAC(id))
//         },
//         unFollow: (id: string | number) => {
//             dispatch(unfollowAC(id))
//         },
//         setUsers: (users: userType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(currentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         setPreloader: (setPreloader: boolean) => {
//             dispatch(setPreloaderAC(setPreloader))
//         }
//     }
// }

export const UsersContainer = compose<ComponentType>(connect(MapStateToProps, {
    setCurrentPage, getUsersThunk, deleteUsersThunk, addUserThunk
}), withRedirect)(Users)
