import React from "react";
import {ProfileInfo} from "./Profile Info/ProfileInfo";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";
import {profileType} from "../Redax/post_reducer";
import {PostsPropsType} from "./ContentContainer";

export type ContentType = {
    profile: profileType
    authReducer: boolean
}

export function Content(props: ContentType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} authReducer={props.authReducer}/>
            <MyPostsContainer/>
        </div>
    )
}