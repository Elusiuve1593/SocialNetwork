import React, {memo} from "react";
import {profileType} from "../../Redax/post_reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

type ProfileInfoType = {
    profile: profileType
    status: (status: string) => void
    updateUserStatusThunk: (status: string) => void

}

export const ProfileInfo = memo((props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    // if (!props.authReducer) {
    //     return <Redirect to={'/login/'}/>
    // }
    return (
        <div>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                    width='1106px'/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                <div><b>fullName:</b> {props.profile.fullName}</div>
                <div><b>Status: </b>
                    <ProfileStatus status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
                </div>
                <h3>Contacts:</h3>
                <ul>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.instagram}</li>
                    <li>{props.profile.contacts.github}</li>
                </ul>
            </div>
        </div>
    )
})