import React from "react";
import classes from './Post.module.css';

type messagePropsType = {
    message: string
    likesCount: number
}

export function Post(props: messagePropsType) {
    return (
        <div className={classes.content}>
            <div className={classes.item}>
                <img src='https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png'/>
                {props.message}
                <div>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}
