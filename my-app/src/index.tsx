import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

export type dialogsDataType = {
    id: string
    name: string
}

let dialogsData: dialogsDataType[] = [
    {id: v1(), name: 'Vladimir'},
    {id: v1(), name: 'Andrew'},
    {id: v1(), name: 'Svetlana'},
    {id: v1(), name: 'Anton'},
]

export type messageDataType = {
    id: string
    message: string
}

let messageData: messageDataType[] = [
    {id: v1(), message: 'Hi, how are u?'},
    {id: v1(), message: 'What is your favorite actor'},
    {id: v1(), message: 'Hello'},
    {id: v1(), message: 'Not today'},
]

export type messagesDataType = {
    id: string
    message: string
    likesCount: number
}

let messages: messagesDataType[] = [
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
ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messageData={messageData} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
