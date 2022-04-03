import React from "react";
import {Content} from "./Content";
import {connect} from "react-redux";
import {AppStateType} from "../Redax/redux-store";
import {profileType, setUsersProfileThunk} from "../Redax/post_reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {initialStateType} from "../Redax/auth_reducer";

export class ClassContent extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
       this.props.setUsersProfileThunk(userId)
    }

    render() {
        return (
            <div>
                <Content profile={this.props.profile} authReducer={this.props.authReducer}/>
            </div>
        )
    }
}

export type PostsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapDispatchToPropsType = {
    setUsersProfileThunk: (userId: string) => void
}
type mapStateToPropsType = {
    profile: profileType
    authReducer: boolean
}
type withRoutComponentType = {
    userId: string
}
type PropsType = RouteComponentProps<withRoutComponentType> & PostsPropsType

export function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        profile: state.postReducer.profile,
        authReducer: state.authReducer.isAuth,
    }
}

const withRoutComponent = withRouter(ClassContent)

export const ContentContainer = connect(mapStateToProps, {setUsersProfileThunk})(withRoutComponent)