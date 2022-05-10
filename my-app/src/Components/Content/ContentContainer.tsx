import React, {ComponentType} from "react";
import {Content} from "./Content";
import {AppStateType} from "../Redax/redux-store";
import {profileType, setUsersProfileThunk} from "../Redax/post_reducer";
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
    }

    render() {
        return (
            <div>
                <Content profile={this.props.profile}/>
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
}
type withRoutComponentType = {
    userId: string
}
type PropsType = RouteComponentProps<withRoutComponentType> & PostsPropsType

export function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        profile: state.postReducer.profile,
    }
}

// const withRoutComponent = withRouter(ClassContent)
//
// export const ContentContainer = withRedirect(connect(mapStateToProps, {setUsersProfileThunk})(withRoutComponent))

export const ContentContainer = compose<ComponentType>(
    connect(mapStateToProps, {setUsersProfileThunk}),
    withRouter,
    withRedirect,
)(ClassContent)