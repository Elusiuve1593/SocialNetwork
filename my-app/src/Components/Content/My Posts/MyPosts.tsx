import React from "react";
import classes from './MyPost.module.css';
import {Post} from "./Post/Post";
import {messagesDataType} from "../../../index";

type myPostsType = {
    messages: messagesDataType[]
}

export function MyPosts(props: myPostsType) {
    let posts = props.messages.map((i) => <Post message={i.message} likesCount={i.likesCount}/>)
    return (
        <div className={classes.content}>
            <div>
                MyPosts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove post</button>
                    {posts}
                </div>
            </div>

        </div>
    )
}