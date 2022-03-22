import {deleteUsers, getUsers, postUsers} from "../Axios/axios";
import {Dispatch} from "redux";

export type usersType = {
    users: Array<userType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

export type userType = {
    followed: boolean
    id: number | string
    name: string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | undefined
    uniqueUrlName: null | undefined
}

export type initialStatePostsType = usersType

const initialState: usersType = {
    users: [],
    pageSize: 100,
    totalCount: 19,
    currentPage: 1,
    isFetching: true,
}

export function usersReducer(state: initialStatePostsType = initialState, action: generalType): initialStatePostsType {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                //users: state.users.map(i => i.id === action.payload.id ? {...i, followed: true} : i)
                users: state.users.map(i => i.id === action.payload.id ? {...i, followed: true} : i)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(i => i.id === action.payload.id ? {...i, followed: false} : i)
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.payload.users
            }
        case "CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case "SET_TOTAL_COUNT": {
            return {
                ...state,
                totalCount: action.payload.totalCount
            }
        }
        case "SET_PRELOADER": {
            return {
                ...state,
                isFetching: action.payload.setPreloader
            }
        }
        default:
            return {...state}

    }
}

export type generalType = followACType
    | unfollowACType
    | setUsersACType
    | currentPageACType
    | setUsersTotalCountACType
    | setPreloaderACType

export type followACType = ReturnType<typeof follow>
export type unfollowACType = ReturnType<typeof unFollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type currentPageACType = ReturnType<typeof setCurrentPage>
export type setUsersTotalCountACType = ReturnType<typeof setTotalUsersCount>
export type setPreloaderACType = ReturnType<typeof setPreloader>

export function follow(id: string | number) {
    return {
        type: 'FOLLOW',
        payload: {id}
    } as const
}

export function unFollow(id: string | number) {
    return {
        type: 'UNFOLLOW',
        payload: {id}
    } as const
}

export function setUsers(users: userType[]) {
    return {
        type: 'SET_USERS',
        payload: {users}
    } as const
}

export function setCurrentPage(currentPage: number) {
    return {
        type: 'CURRENT_PAGE',
        payload: {currentPage}
    } as const
}

export function setTotalUsersCount(totalCount: number) {
    return {
        type: 'SET_TOTAL_COUNT',
        payload: {totalCount}
    } as const
}

export function setPreloader(setPreloader: boolean) {
    return {
        type: 'SET_PRELOADER',
        payload: {setPreloader}
    } as const
}

export const getUsersThunk = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<generalType>) => {
        getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setPreloader?.(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const deleteUsersThunk = (id: string | number) => {
    return (dispatch: Dispatch<generalType>) => {
        deleteUsers(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(id))
                }
            })
    }
}

export const addUserThunk = (id: string | number) => {
    return (dispatch: Dispatch<generalType>) => {
        postUsers(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                }
            })
    }
}