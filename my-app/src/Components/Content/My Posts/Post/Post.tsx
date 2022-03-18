import React from "react";
import classes from './Post.module.css';
import {DispatchType} from "../MyPostsContainer";
import {setDecreaseLike} from "../../../Redax/post_reducer";


type messagePropsType = {
    message: string
    likesCount: number
    id: string
    dispatchType: (id: string) => void
    setAddLike: (id: string) => void
    setDecreaseLike: (id: string) => void
}

export function Post(props: messagePropsType) {
    const onClickHandler = () => {
        props.dispatchType(props.id)
    }
    const onAddLike = () => {
        props.setAddLike(props.id)
    }
    const onDecreaseLike = () => {
        props.setDecreaseLike(props.id)
    }
    return (
        <div className={classes.content}>
            <div className={classes.item}>
                <img src='https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png'/>
                {props.message}
                <button onClick={onClickHandler}>Delete</button>
                <div>
                    <span>{props.likesCount}</span>
                    <button onClick={onAddLike}>+</button>
                    <button onClick={onDecreaseLike}>-</button>
                </div>
            </div>
        </div>
    )
}