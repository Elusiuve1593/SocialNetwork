import {v1} from "uuid";
import {reRenderEntireTree} from "../../index";

export type dialogsDataType = {
    id: string
    name: string
}
export type messageDataType = {
    id: string
    message: string
}
export type messagesDataType = {
    id: string
    message: string
    likesCount: number
}
export type dialogsPageType = {
    newMessageState: string
    dialogsData: dialogsDataType[]
    messageData: messageDataType[]
}
export type contentPageType = {
    messagesData: messagesDataType[]
    newPostMessageState: string
}
export type stateRootType = {
    dialogsPage: dialogsPageType
    contentPage: contentPageType
}
export type storeType = {
    _state: stateRootType
    getState: () => stateRootType
    dispatch: (action: addPostType | addNewPostTypeMessage) => void
}

export type addPostType = ReturnType<typeof addPostActionCreator>
export type addNewPostTypeMessage = ReturnType<typeof addMessageActionCreator>

export const store: storeType = {
    _state: {
        dialogsPage: {
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
        },
        contentPage: {
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
    },
    getState() {
        return this._state
    },
    dispatch(action: any) {
        if (action.type === 'ADD_POST') {
            const newPost = {
                id: v1(),
                message: this._state.contentPage.newPostMessageState,
                likesCount: 0
            }
            this._state.contentPage.messagesData.push(newPost)
            reRenderEntireTree(this._state)
        }
        if (action.type === 'NEW_POST_MESSAGE') {
            this._state.contentPage.newPostMessageState = action.newText
            reRenderEntireTree(this._state)
        }
        if (action.type === 'ADD_MESSAGE') {
            const newMessage = {
                id: v1(),
                message: this._state.dialogsPage.newMessageState
            }
            this._state.dialogsPage.messageData.push(newMessage)
            reRenderEntireTree(this._state)
        }
        if (action.type === 'NEW_DIALOGS_MESSAGE') {
            this._state.dialogsPage.newMessageState = action.newText
        }
    },
}

export function addPostActionCreator() {
    return {type: 'ADD_POST'}
}

export function addMessageActionCreator(text: string) {
    return {type: 'NEW_POST_MESSAGE', newText: text}
}

export function addDialogsActionCreator(text: string) {
    return {type: 'NEW_DIALOGS_MESSAGE', newText: text}
}

export function addDialogActionCreator() {
    return {type: 'ADD_MESSAGE'}
}