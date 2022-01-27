import {v1} from "uuid";
import {reRenderEntireTree} from "../../index";
import {store} from "./redux-store";

export type messagesDataType = {
    id: string
    message: string
    likesCount: number
}

export type initialStatePostsType = {
    newPostMessageState: string
    messagesData: messagesDataType[]
}

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
    ]
}

export function postReducer(state: initialStatePostsType = initialState, action: generalACType) {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: v1(),
                message: state.newPostMessageState,
                likesCount: 0
            }
            state.messagesData.push(newPost)
            // reRenderEntireTree()
            return state
        case 'NEW_POST_MESSAGE' :
            state.newPostMessageState = action.newText
            //reRenderEntireTree(state)
            return state
        default:
            return state
    }
}

export type generalACType = addPostActionCreatorType | addMessageActionCreator;
export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type addMessageActionCreator = ReturnType<typeof addMessageActionCreator>

export function addPostActionCreator() {
    return {type: 'ADD_POST'} as const
}

export function addMessageActionCreator(text: string) {
    return {type: 'NEW_POST_MESSAGE', newText: text} as const
}