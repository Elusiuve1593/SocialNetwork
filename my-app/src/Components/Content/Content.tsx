import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./Profile Info/ProfileInfo";
import {contentPageType, messagesDataType} from "../Redax/redax";

type contentType = {
    content:contentPageType
    addPost: (postMessage: string) => void
}

export function Content(props: contentType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                messages={props.content.messagesData}
                addPost={props.addPost}
            />

        </div>
    )
}