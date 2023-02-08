import {v1} from "uuid";
//import {reRenderEntireTree} from "../../index";

export type dialogsDataType = {
    id: string
    name: string
}
export type messageDataType = {
    id: string
    message: string
}
export type initialStateDialogsType = typeof initialState

export const initialState = {
    newMessageState: '',
    dialogsData: [
        {id: v1(), name: 'Vladimir'},
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Svetlana'},
        {id: v1(), name: 'Anton'},
    ] as dialogsDataType[],
    messageData: [
        {id: v1(), message: 'Hi, how are u?'},
        {id: v1(), message: 'What is your favorite actor'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Not today'},
    ] as messageDataType[],
}

export function dialogsReducer(state: initialStateDialogsType = initialState, action: generalType): initialStateDialogsType {
    switch (action.type) {
        case 'ADD_MESSAGE' :
            // const newMessage = {
            //     id: v1(),
            //     message: state.newMessageState
            // }
            // const copyState = {...state}
            // copyState.messageData = [...state.messageData]
            // copyState.messageData.push(newMessage)
            // return copyState
            return {
                ...state,
                newMessageState: '',
                messageData: [...state.messageData, {id: v1(), message: state.newMessageState}]
            }
        case 'REMOVE_MESSAGE':
            return {...state, messageData: [...state.messageData.filter(i => i.id !== action.payload.id)]}
        case 'NEW_DIALOGS_MESSAGE':
            return {...state, newMessageState: action.newText}
        default:
            return {...state}
    }
}

export type generalType = addDialogsActionCreatorType | addMessageActionCreatorType | removeActionCreatorType

export type addDialogsActionCreatorType = ReturnType<typeof addPost>
export type addMessageActionCreatorType = ReturnType<typeof newText>
export type removeActionCreatorType = ReturnType<typeof removePost>

export function addPost() {
    return {type: 'ADD_MESSAGE'} as const
}

export function newText(text: string) {
    return {type: 'NEW_DIALOGS_MESSAGE', newText: text} as const
}

export function removePost(id: string) {
    return {
        type: 'REMOVE_MESSAGE',
        payload: {id}
    } as const
}
