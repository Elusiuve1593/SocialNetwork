import {v1} from "uuid";
import {Dispatch} from "redux";
import {api} from "../Axios/axios";

export type postType = {
    newPostMessageState: string
    status: string
    profile: profileType
    messagesData: messagesDataType[]
}

export type profileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null | undefined
        vk: string
        twitter: string
        instagram: string
        youtube: null | undefined
        github: string
        mainLink: null | undefined
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type messagesDataType = {
    id: string
    message: string
    likesCount: number
}

export type initialStatePostsType = postType

const initialState: postType = {
    newPostMessageState: '',
    status: '',
    profile: {
        aboutMe: 'Learning',
        contacts: {
            facebook: 'facebook',
            website: undefined,
            vk: 'vk',
            twitter: 'twitter',
            instagram: 'instagram',
            youtube: undefined,
            github: 'github',
            mainLink: undefined
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'lookingForAJobDescription',
        fullName: 'fullName',
        userId: 1,
        photos: {
            small: 'small',
            large: 'large',
        }
    },
    messagesData: [
        {
            id: v1(),
            message: 'Hi, how are u?',
            likesCount: 8,
        },
        {
            id: v1(),
            message: 'Crazy people around me...',
            likesCount: 4,
        },

    ] as messagesDataType[]
}

export function postReducer(state: initialStatePostsType = initialState, action: generalACType): initialStatePostsType {
    switch (action.type) {
        case 'ADD_POST':
            // const newPost = {
            //     id: v1(),
            //     message: state.newPostMessageState,
            //     likesCount: 0
            // }
            // const stateCopy = {...state}
            // stateCopy.messagesData = [...state.messagesData]
            // stateCopy.messagesData.push(newPost)
            // return stateCopy
            return {
                ...state,
                newPostMessageState: '',
                messagesData: [...state.messagesData, {id: v1(), message: state.newPostMessageState, likesCount: 1}]
            }
        case "REMOVE_POST":
            return {
                ...state, messagesData: [...state.messagesData.filter(i => i.id !== action.id)]

            }
        case "ADD_LIKE": {
            return {
                ...state,
                messagesData: [...state.messagesData.filter(i => i.id === action.id ? i.likesCount++ : i.likesCount)]
            }
        }
        case "DECREASE_LIKE": {
            return {
                ...state,
                messagesData: [...state.messagesData.filter(i => i.id === action.id ? i.likesCount-- : i.likesCount)]
            }
        }
        case 'NEW_POST_MESSAGE' : {
            return {...state, newPostMessageState: action.newText}
        }
        case "SET_USERS_PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET_USER_PROFILE_STATUS" : {
            return {...state, status: action.status}
        }
        default:
            return {...state}
    }
}

export type generalACType = addPostActionCreatorType
    | addMessageActionCreator
    | removePostAC
    | setUsersProfile
    | setAddLike
    | setDecreaseLike
    | setUserProfileType;

export type addPostActionCreatorType = ReturnType<typeof addPosts>
export type removePostAC = ReturnType<typeof removePost>
export type addMessageActionCreator = ReturnType<typeof newText>
export type setUsersProfile = ReturnType<typeof setUsersProfile>
export type setAddLike = ReturnType<typeof setAddLike>
export type setDecreaseLike = ReturnType<typeof setDecreaseLike>
export type setUserProfileType = ReturnType<typeof setUserStatus>

export function addPosts() {
    return {type: 'ADD_POST'} as const
}

export function removePost(id: string) {
    return {type: 'REMOVE_POST', id} as const
}

export function newText(text: string) {
    return {type: 'NEW_POST_MESSAGE', newText: text} as const
}

export function setUsersProfile(profile: profileType) {
    return {type: 'SET_USERS_PROFILE', profile} as const
}

export function setAddLike(id: string) {
    return {
        type: 'ADD_LIKE',
        id
    } as const
}

export function setDecreaseLike(id: string) {
    return {
        type: 'DECREASE_LIKE',
        id
    } as const
}

export function setUserStatus(status: string) {
    return {type: 'SET_USER_PROFILE_STATUS', status} as const
}

export const setUsersProfileThunk = (userId: string) => {
    return (dispatch: Dispatch<generalACType>) => {
        api.getContent(userId)
            .then(data => {
                dispatch(setUsersProfile(data))
            })
    }
}

export const getUserStatusThunk = (userId: string) => {
    return (dispatch: Dispatch<generalACType>) => {
        api.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}

export const updateUserStatusThunk = (status: string) => {
    return (dispatch: Dispatch<generalACType>) => {
        api.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}