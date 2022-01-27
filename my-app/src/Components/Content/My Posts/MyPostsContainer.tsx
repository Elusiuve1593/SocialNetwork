import React from "react";
import classes from './MyPost.module.css';
import {Post} from "./Post/Post";
import {
    addMessageActionCreator,
    addNewPostTypeMessage,
    addPostActionCreator,
    addPostType,
    messagesDataType,
    stateRootType, storeType
} from "../../Redax/redax";
import {MyPosts} from "./MyPosts";

type myPostsType = {
    store: storeType
}

export function MyPostsContainer(props: myPostsType) {

    function addPosts() {
        props.store.dispatch(addPostActionCreator())
    }

    function newText(text: string) {
        props.store.dispatch(addMessageActionCreator(text))
    }

    return (<MyPosts addPosts={addPosts}
                     newText={newText}
                     messages={props.store._state.contentPage.messagesData}
                     newMessages={props.store._state.contentPage.newPostMessageState}
                     dispatch={props.store.dispatch}/>)
}