import {v1} from "uuid";

export type messagesDataType = {
    id: string
    message: string
    likesCount: number
}

export type initialStatePostsType = typeof initialState

export const initialState = {
    newPostMessageState: '',
    messagesData: [
        {
            id: v1(),
            message: 'Hi, how are u?',
            likesCount: 34,
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
                messagesData: [...state.messagesData, {id: v1(), message: state.newPostMessageState, likesCount: 0}]
            }
        case "REMOVE_POST":
            return {
                ...state, messagesData: [...state.messagesData.filter(i => i.id !== action.id)]

            }
        case 'NEW_POST_MESSAGE' :
            return {...state, newPostMessageState: action.newText}
        default:
            return {...state}
    }
}

export type generalACType = addPostActionCreatorType | addMessageActionCreator | removePostAC ;
export type addPostActionCreatorType = ReturnType<typeof addPosts>
export type removePostAC = ReturnType<typeof removePost>
export type addMessageActionCreator = ReturnType<typeof newText>

export function addPosts() {
    return {type: 'ADD_POST'} as const
}

export function removePost(id: string) {
    return {type: 'REMOVE_POST', id} as const
}

export function newText(text: string) {
    return {type: 'NEW_POST_MESSAGE', newText: text} as const
}

