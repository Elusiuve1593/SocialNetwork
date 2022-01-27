import React, {useState} from "react";
import classes from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialoItem";
import {Message} from "./Message/Message";
import {
    addDialogActionCreator,
    addDialogsActionCreator,
    addMessageActionCreator,
    addNewPostTypeMessage,
    addPostActionCreator,
    addPostType,
    dialogsDataType,
    dialogsPageType,
    messageDataType, stateRootType, storeType
} from "../Redax/redax";
import {Dialogs} from "./Dialogs";

type dialogDataType = {
    store: storeType
}

export function DialogsContainer(props: dialogDataType) {
    function addPost() {
        props.store.dispatch(addDialogActionCreator())
    }

    function newText(text: string) {
        props.store.dispatch(addDialogsActionCreator(text))

    }

    return (<Dialogs newText={newText}
                     addPost={addPost}
                     dispatch={props.store.dispatch}
                     dialogs={props.store._state.dialogsPage.dialogsData}
                     message={props.store._state.dialogsPage.messageData}
                     newMessageState={props.store._state.dialogsPage.newMessageState}
                     />)
}