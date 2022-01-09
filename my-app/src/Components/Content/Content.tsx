import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./Profile Info/ProfileInfo";
import {contentPageType, messagesDataType, stateRootType} from "../Redax/redax";

type contentType = {
    content:contentPageType
    state?: stateRootType
    addPost: (postMessage: string) => void
    newPostMessage: (newText: string) => void
}

export function Content(props: contentType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                messages={props.content.messagesData}
                newMessages={props.content.newPostMessageState}
                addPost={props.addPost}
                newPostMessage = {props.newPostMessage}
            />

        </div>
    )
}