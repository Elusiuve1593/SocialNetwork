import {v1} from "uuid";

export type usersType = {
    id: string
    photoUrl: string
    isFollow: boolean
    fullName: string
    status: string
    location: {
        city: string
        countryName: string
    }
}

export type initialStatePostsType = typeof initialState

const initialState = {
    users: [
        {
            id: v1(),
            photoUrl: 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png',
            isFollow: true,
            fullName: 'Andrew',
            status: 'Hello',
            location: {city: 'Kiev', countryName: 'Ukraine'}
        },
        {
            id: v1(),
            photoUrl: 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png',
            isFollow: true,
            fullName: 'Dmitro',
            status: 'Today was a good day',
            location: {city: 'Moscow', countryName: 'Russia'}
        },
        {
            id: v1(),
            photoUrl: 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png',
            isFollow: false,
            fullName: 'Boris',
            status: 'Just do it!',
            location: {city: 'Minsk', countryName: 'Belarus'}
        },
    ] as usersType[]
}


export function usersReducer(state: initialStatePostsType = initialState, action: generalType): initialStatePostsType {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(i => i.id === action.payload.id ? {...i, isFollow: true} : i)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(i => i.id === action.payload.id ? {...i, isFollow: false} : i)
            }
        default:
            return {...state}
        // case "USERS":
        //     return {
        //         ...state,
        //         users: [...state, ...action.payload.users]
        //     }
    }
}

export type generalType = followACType | unfollowACType
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>

//export type setUsersACType = ReturnType<typeof setUsersAC>

export function followAC(id: string) {
    return {
        type: 'FOLLOW',
        payload: {id}
    } as const
}

export function unfollowAC(id: string) {
    return {
        type: 'UNFOLLOW',
        payload: {id}
    } as const
}

// export function setUsersAC(users: string) {
//     return {
//         type: 'USERS',
//         payload: {users}
//     } as const
// }