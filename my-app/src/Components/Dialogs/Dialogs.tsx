import React from "react";
import classes from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialoItem";
import {Message} from "./Message/Message";
import {dialogsDataType, dialogsPageType, messageDataType} from "../Redax/redax";

type dialogDataType = {
    dialogs: dialogsDataType[]
    message: messageDataType[]

}

export function Dialogs(props: dialogDataType) {
    let dialogsElements = props.dialogs.map((i) => <DialogsItem id={i.id} name={i.name}/>)
    let messagesElements = props.message.map((i) => <Message message={i.message}/>)
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