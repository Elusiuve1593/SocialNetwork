import classes from "../Dialogs.module.css";
import React from "react";

type messagePropsType = {
    message?: string
    removePost: (id: string) => void
    id: string
}

export function Message(props: messagePropsType) {
    const callBack = () => {
        props.removePost(props.id)
    }
    return (
        <div>
            <div className={classes.message}>{props.message}</div>
            <button onClick={callBack}>Delete</button>
        </div>

    )
}