export type usersType = {
    users:Array<userType>
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
    users: [
        // {
        //     id: v1(),
        //     photoUrl: 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png',
        //     isFollow: true,
        //     fullName: 'Andrew',
        //     status: 'Hello',
        //     location: {city: 'Kiev', countryName: 'Ukraine'}
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png',
        //     isFollow: true,
        //     fullName: 'Dmitro',
        //     status: 'Today was a good day',
        //     location: {city: 'Moscow', countryName: 'Russia'}
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png',
        //     isFollow: false,
        //     fullName: 'Boris',
        //     status: 'Just do it!',
        //     location: {city: 'Minsk', countryName: 'Belarus'}
        // },
    ]
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
                users: [...state.users, ...action.payload.users]
            }
        default:
            return {...state}

    }
}

export type generalType = followACType | unfollowACType | setUsersACType
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

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