import React from "react";
import classes from './MyPost.module.css';
import {Post} from "./Post/Post";
import {
    addMessageActionCreator,
    addNewPostTypeMessage,
    addPostActionCreator,
    addPostType,
    messagesDataType,
    stateRootType
} from "../../Redax/redax";

type myPostsType = {
    state?: stateRootType
    newMessages: string
    messages: messagesDataType[]
    dispatch: (action: addPostType | addNewPostTypeMessage) => void
}

export function MyPosts(props: myPostsType) {
    let posts = props.messages.map((i) => <Post key={i.id} message={i.message} likesCount={i.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPosts() {
        props.dispatch(addPostActionCreator())
    }

    function newText() {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            props.dispatch(addMessageActionCreator(text))
        }
    }

    return (
        <div className={classes.content}>
            <div>
                MyPosts
                <div>
                    <textarea ref={newPostElement} value={props.state?.contentPage.newPostMessageState}
                              onChange={newText}/>
                    <button onClick={addPosts}>Add post</button>
                    <button>Remove post</button>
                    {posts}
                </div>
            </div>

        </div>
    )
}