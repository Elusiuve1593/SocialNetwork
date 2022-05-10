import React from "react";
import {ProfileInfo} from "./Profile Info/ProfileInfo";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";
import {profileType} from "../Redax/post_reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

export type ContentType = {
    profile: profileType
    status: (status: string) => void
    updateUserStatusThunk: (status: string) => void

}

export function Content(props: ContentType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateUserStatusThunk={props.updateUserStatusThunk}/>
            <MyPostsContainer/>
        </div>
    )
}