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
                    <Post message='Hi, how are u?' likesCount={1}/>
                    <Post message='Crazy people around me...' likesCount={34}/>
                </div>
            </div>

        </div>
    )
}