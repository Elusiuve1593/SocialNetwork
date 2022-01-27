import {v1} from "uuid";
import {reRenderEntireTree} from "../../index";

export type dialogsDataType = {
    id: string
    name: string
}
export type messageDataType = {
    id:string
    message: string
}
export type  initialStateDialogsType = {
    newMessageState:string
    dialogsData: dialogsDataType[]
    messageData: messageDataType[]

}

export const initialState = {
    newMessageState: '',
    dialogsData: [
        {id: v1(), name: 'Vladimir'},
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Svetlana'},
        {id: v1(), name: 'Anton'},
    ],
    messageData: [
        {id: v1(), message: 'Hi, how are u?'},
        {id: v1(), message: 'What is your favorite actor'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Not today'},
    ],
}

export function dialogsReducer(state: initialStateDialogsType = initialState, action: generalType) {
    switch (action.type) {
        case 'ADD_MESSAGE' :
            const newMessage = {
                id: v1(),
                message: state.newMessageState
            }
            state.messageData.push(newMessage)
            //reRenderEntireTree(state)
            return state
        case 'NEW_DIALOGS_MESSAGE':
            state.newMessageState = action.newText
            return state
        default:
            return state
    }
}

export type generalType = addDialogsActionCreatorType | addDialogActionCreatorType

export type addDialogsActionCreatorType = ReturnType<typeof addDialogsActionCreator>
export type addDialogActionCreatorType = ReturnType<typeof addDialogActionCreator>

export function addDialogsActionCreator(text: string) {
    return {type: 'NEW_DIALOGS_MESSAGE', newText: text} as const
}

export function addDialogActionCreator() {
    return {type: 'ADD_MESSAGE'} as const
}
