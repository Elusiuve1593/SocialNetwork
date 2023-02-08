import React, {ComponentType} from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {
    addPost,
    newText,
    removePost,
    dialogsDataType,
    messageDataType,
} from "../Redux/dialogs_reducer";
import {AppStateType} from "../Redux/redux-store";
import {withRedirect} from "../../hoc/withRedirect";
import {compose} from "redux";

export type mapStateToPropsType = {
    newMessageState: string
    message: messageDataType[]
    dialogs: dialogsDataType[]
    authReducer: boolean
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
        authReducer: state.authReducer.isAuth,

    }
}

export const DialogsContainer = compose<ComponentType>(connect(mapStateToProps, {
    addPost,
    newText,
    removePost,
}), withRedirect)(Dialogs)