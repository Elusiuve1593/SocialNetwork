import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfileInfo} from "./Profile Info/ProfileInfo";
import {addNewPostTypeMessage, addPostType, contentPageType, stateRootType, store, storeType} from "../Redax/redax";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";

type contentType = {
    store: storeType
    //content: contentPageType
    //state?: stateRootType
    // dispatch: (action: addPostType | addNewPostTypeMessage) => void
}

export function Content(props: contentType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}