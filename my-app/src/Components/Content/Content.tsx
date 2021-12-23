import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./Profile Info/ProfileInfo";
import {messagesDataType} from "../../index";

type contentPropsType = {
    messages: messagesDataType[]
}

export function Content(props: contentPropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts messages={props.messages}/>
        </div>
    )
}