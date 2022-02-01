import React from "react";
import classes from './Post.module.css';
import {DispatchType} from "../MyPostsContainer";


type messagePropsType = {
    message: string
    likesCount: number
    id: string
    dispatchType: (id: string) => void
}

export function Post(props: messagePropsType) {
    const onClickHandler = () => {
        props.dispatchType(props.id)
    }
    return (
        <div className={classes.content}>
            <div className={classes.item}>
                <img src='https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png'/>
                {props.message}
                <div>
                    <span>{props.likesCount}</span>
                    <button onClick={onClickHandler}>Delete</button>
                </div>
            </div>
        </div>
    )
}
