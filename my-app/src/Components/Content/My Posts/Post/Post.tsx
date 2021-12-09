import React from "react";
import classes from './Post.module.css';

export function Post() {
    return (
        <div className={classes.content}>
            <div className={classes.item}>
                <img src='https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png'/>
                Post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}