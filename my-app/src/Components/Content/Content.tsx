import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./Profile Info/ProfileInfo";
import {contentPageType} from "../Redax/redax";

type contentType = {
    content:contentPageType
}

export function Content(props: contentType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts messages={props.content.messagesData}/>c
        </div>
    )
}