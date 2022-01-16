import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./Profile Info/ProfileInfo";
import {addNewPostTypeMessage, addPostType, contentPageType, stateRootType} from "../Redax/redax";

type contentType = {
    content:contentPageType
    state?: stateRootType
    dispatch: (action: addPostType | addNewPostTypeMessage) => void
}

export function Content(props: contentType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                messages={props.content.messagesData}
                newMessages={props.content.newPostMessageState}
                dispatch={props.dispatch}
            />

        </div>
    )
}