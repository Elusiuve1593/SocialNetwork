import React from "react";
import {ProfileInfo} from "./Profile Info/ProfileInfo";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";

export function Content() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}