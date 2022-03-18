import React from "react";
import {Content} from "./Content";
import {connect} from "react-redux";
import {AppStateType} from "../Redax/redux-store";
import {profileType, setUsersProfile} from "../Redax/post_reducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

export class ClassContent extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUsersProfile(response.data)
        })
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
    setUsersProfile: (profile: profileType) => void
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
        profile: state.postReducer.profile
    }
}

const withRoutComponent = withRouter(ClassContent)

export const ContentContainer = connect(mapStateToProps, {setUsersProfile})(withRoutComponent)