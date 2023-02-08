import React, {ComponentType} from "react";
import {Content} from "./Content";
import {AppStateType} from "../Redux/redux-store";
import {getUserStatusThunk, profileType, setUsersProfileThunk, updateUserStatusThunk} from "../Redux/post_reducer";
// @ts-ignore
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withRedirect} from "../../hoc/withRedirect";
import {connect} from "react-redux";

export class ClassContent extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.setUsersProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    render() {
        return (
            <div>
                <Content profile={this.props.profile} status={this.props.status}
                         updateUserStatusThunk={this.props.updateUserStatusThunk}/>
            </div>
        )
    }
}

export type PostsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapDispatchToPropsType = {
    setUsersProfileThunk: (userId: string) => void
    getUserStatusThunk: (userId: string) => void
    updateUserStatusThunk: (status: string) => void

}
type mapStateToPropsType = {
    profile: profileType
    status: (status: string) => void
}
type withRoutComponentType = {
    userId: string
}
type PropsType = RouteComponentProps<withRoutComponentType> & PostsPropsType

export function mapStateToProps(state: AppStateType): { profile: profileType; status: string } {
    return {
        profile: state.postReducer.profile,
        status: state.postReducer.status,
    }
}

// const withRoutComponent = withRouter(ClassContent)
//
// export const ContentContainer = withRedirect(connect(mapStateToProps, {setUsersProfileThunk})(withRoutComponent))

export const ContentContainer = compose<ComponentType>(
    connect(mapStateToProps, {setUsersProfileThunk, getUserStatusThunk, updateUserStatusThunk}),
    withRouter,
    withRedirect,
)(ClassContent)