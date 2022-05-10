import React, {useState} from "react";
import classes from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialoItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

export function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogs.map((i) => <DialogsItem key={i.id} id={i.id} name={i.name}/>)
    let messagesElements = props.message.map((i) => <Message key={i.id} id={i.id} message={i.message}
                                                             removePost={props.removePost}/>)

    function addPost() {
        props.addPost()
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    function newText() {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            props.newText(text)
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.item}>
                    {dialogsElements}
                </div>
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newPostElement} value={props.newMessageState}
                          onChange={newText}/>
                <button onClick={addPost}>Press</button>
            </div>
        </div>
    );
}