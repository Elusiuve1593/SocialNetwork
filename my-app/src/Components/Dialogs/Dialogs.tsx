import React from "react";
import classes from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialoItem";
import {Message} from "./Message/Message";
import {dialogsDataType, messageDataType} from "../../index";

type dialogDataType = {
    dialogsData: dialogsDataType[]
    messageData: messageDataType[]
}

export function Dialogs(props: dialogDataType) {
    let dialogsElements = props.dialogsData.map((i) => <DialogsItem id={i.id} name={i.name}/>)
    let messagesElements = props.messageData.map((i) => <Message message={i.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.item}>
                    {dialogsElements}
                </div>
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}