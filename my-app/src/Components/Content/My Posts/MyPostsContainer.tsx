import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {
    addMessageActionCreator,
    addPostActionCreator,
    messagesDataType, removePostAC
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
    removePost: (id:string) => void
}

export type PostsPropsType = DispatchType & MapStateToPropsType

export function MapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        messages: state.postReducer.messagesData,
        newMessages: state.postReducer.newPostMessageState,
    }
}

export function MapDispatchToProps(dispatch: Dispatch): DispatchType {
    return {
        addPosts: () => {
            dispatch(addPostActionCreator())
        },
        removePost: (id) => {
            dispatch(removePostAC(id))
        },
        newText: (text: string) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)