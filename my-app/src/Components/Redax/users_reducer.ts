export type usersType = {
    users: Array<userType>
    pageSize: number
    totalCount: number
    currentPage: number
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
    pageSize: 20,
    totalCount: 19,
    currentPage: 1,
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
        default:
            return {...state}

    }
}

export type generalType = followACType
    | unfollowACType
    | setUsersACType
    | currentPageACType
    | setUsersTotalCountACType
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type currentPageACType = ReturnType<typeof currentPageAC>
export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>

export function followAC(id: string | number) {
    return {
        type: 'FOLLOW',
        payload: {id}
    } as const
}

export function unfollowAC(id: string | number) {
    return {
        type: 'UNFOLLOW',
        payload: {id}
    } as const
}

export function setUsersAC(users: userType[]) {
    return {
        type: 'SET_USERS',
        payload: {users}
    } as const
}

export function currentPageAC(currentPage: number) {
    return {
        type: 'CURRENT_PAGE',
        payload: {currentPage}
    } as const
}

export function setUsersTotalCountAC(totalCount: number) {
    return {
        type: 'SET_TOTAL_COUNT',
        payload: {totalCount}
    } as const
}