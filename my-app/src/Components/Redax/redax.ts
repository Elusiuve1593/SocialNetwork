import {v1} from "uuid";

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
    dialogsData: dialogsDataType[]
    messageData: messageDataType[]
}
export type contentPageType = {
    messagesData: messagesDataType[]
}
export type stateRootType = {
    dialogsPage: dialogsPageType
    contentPage: contentPageType
}

export let state: stateRootType = {
    dialogsPage: {
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
}