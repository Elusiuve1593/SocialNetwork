import React from "react";
import classes from './MyPost.module.css';
import {Post} from "./Post/Post";
import {
    addMessageActionCreator,
    addNewPostTypeMessage,
    addPostActionCreator,
    addPostType, contentPageType, dialogsPageType,
    messagesDataType,
    stateRootType
} from "../../Redax/redax";

type myPostsType = {
    //state?: stateRootType
    newMessages: string
    messages: messagesDataType[]
    addPosts: () => void
    newText: (text: string) => void
    dispatch: (action: addPostType | addNewPostTypeMessage) => void
}

export function MyPosts(props: myPostsType) {
    const posts = props.messages.map((i) => <Post key={i.id} message={i.message} likesCount={i.likesCount}/>)

    function addPosts() {
        props.addPosts()
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    function newText() {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            props.newText(text)
        }
    }

    return (
        <div className={classes.content}>
            <div>
                MyPosts
                <div>
                    <textarea ref={newPostElement} value={props.newMessages}
                              onChange={newText}/>
                    <button onClick={addPosts}>Add post</button>
                    <button>Remove post</button>
                    {posts}
                </div>
            </div>

        </div>
    )
}