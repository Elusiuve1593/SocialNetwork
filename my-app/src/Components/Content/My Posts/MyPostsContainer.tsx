import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {
    addPosts,
    removePost,
    newText, messagesDataType, setAddLike, setDecreaseLike,
} from "../../Redax/post_reducer";
import {AppStateType} from "../../Redax/redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsType = {
    newMessages: string;
    messages: messagesDataType[]
}

export type DispatchType = {
    addPosts: () => void
    newText: (text: string) => void
    removePost: (id: string) => void
    setAddLike: (id: string) => void
    setDecreaseLike: (id: string) => void
}

export type PostsPropsType = DispatchType & MapStateToPropsType

export function MapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        messages: state.postReducer.messagesData,
        newMessages: state.postReducer.newPostMessageState,
    }
}

export const MyPostsContainer = connect(MapStateToProps, {
    addPosts,
    removePost,
    newText,
    setAddLike,
    setDecreaseLike,
})(MyPosts)