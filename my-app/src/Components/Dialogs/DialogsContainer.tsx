import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {
    addPost,
    newText,
    removePost,
    dialogsDataType,
    messageDataType,
} from "../Redax/dialogs_reducer";
import {AppStateType} from "../Redax/redux-store";

export type mapStateToPropsType = {
    newMessageState: string
    message: messageDataType[]
    dialogs: dialogsDataType[]
}
export type MapDispatchToProps = {
    addPost: () => void
    newText: (text: string) => void
    removePost: (id: string) => void
}

export type DialogsPropsType = mapStateToPropsType & MapDispatchToProps

export function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        dialogs: state.dialogsReducer.dialogsData,
        message: state.dialogsReducer.messageData,
        newMessageState: state.dialogsReducer.newMessageState,
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    addPost,
    newText,
    removePost,
})(Dialogs)