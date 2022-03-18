import React from "react";
import {profileType} from "../../Redax/post_reducer";
import {Preloader} from "../../Common/Preloader/Preloader";

type ProfileInfoType = {
    profile: profileType
}
// profile: {
//
//
//     lookingForAJob: true,
//         lookingForAJobDescription: 'lookingForAJobDescription',
//         fullName: 'fullName',
//         userId: 1,
//         photos: {
//         small: 'small',
//             large: 'large',
//     }
// },
export function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
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
                <div><b>Status: </b>{props.profile.aboutMe}</div>
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
}