import React from "react";
import classes from './MyPost.module.css';
import {Post} from "./Post/Post";


export function MyPosts() {
    return (
        <div className={classes.content}>
            <div>
                MyPosts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove post</button>
                    <Post/>
                </div>
            </div>

        </div>
    )
}