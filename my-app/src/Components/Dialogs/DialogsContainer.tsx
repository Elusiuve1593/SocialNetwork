import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {
    addDialogsActionCreator,
    addMessegeActionCreator, dialogsDataType, messageDataType, removePostAC,
} from "../Redax/dialogs_reducer";
import {AppStateType} from "../Redax/redux-store";
import {Dispatch} from "redux";

export type mapStateToPropsType = {
    newMessageState: string
    message: messageDataType[]
    dialogs: dialogsDataType[]
}
export type MapDispatchToProps = {
    addPost: () => void
    newText: (text: string) => void
    removePost: (id:string) => void
}

export type DialogsPropsType = mapStateToPropsType & MapDispatchToProps

export function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        dialogs: state.dialogsReducer.dialogsData,
        message: state.dialogsReducer.messageData,
        newMessageState: state.dialogsReducer.newMessageState,
    }
}

export function MapDispatchToProps(dispatch: Dispatch): MapDispatchToProps {
    return {
        addPost: () => {
            dispatch(addMessegeActionCreator())
        },
        removePost: (id: string) => {
            dispatch(removePostAC(id))
        }
        ,
        newText: (text: string) => {
            dispatch(addDialogsActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, MapDispatchToProps)(Dialogs)