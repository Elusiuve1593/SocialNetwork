import React from "react";
import classes from './MyPost.module.css';
import {Post} from "./Post/Post";
import {contentPageType, messagesDataType} from "../../Redax/redax";

type myPostsType = {
    messages: messagesDataType[]
    addPost: (postMessage: string) => void
}

export function MyPosts(props: myPostsType) {
    let posts = props.messages.map((i) => <Post key={i.id} message={i.message} likesCount={i.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPosts() {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            props.addPost(text)
        }
    }

    return (
        <div className={classes.content}>
            <div>
                MyPosts
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addPosts}>Add post</button>
                    <button>Remove post</button>
                    {posts}
                </div>
            </div>

        </div>
    )
}