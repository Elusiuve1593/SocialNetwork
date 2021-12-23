import classes from "../Dialogs.module.css";
import React from "react";

type messagePropsType = {
    message?: string
}

export function Message(props: messagePropsType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}