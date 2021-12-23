import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type dialogItemType = {
    id?: string
    name?: string
}

export function DialogsItem(props: dialogItemType) {
    const path = '/dialogs/' + props.id
    return (
        <div className={classes.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}