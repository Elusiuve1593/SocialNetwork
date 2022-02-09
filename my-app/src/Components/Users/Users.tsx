import React from "react";
import {PostsPropsType} from "./UsersContainer";
import classes from './Users.module.css';
import axios from "axios";

export function Users(props: PostsPropsType) {
    if ( props.users.length === 0 ) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {props.users.map(i => {
                return (
                    <div>
                        <img className={classes.item} src={i.photos.small !== null ? i.photos.small : 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png' }/>
                        <div>
                            {i.followed ? <button onClick={() => props.unFollow(i.id)}>Follow</button> :
                                <button onClick={() => props.follow(i.id)}>Unfollow</button>
                            }
                        </div>
                        <div className={classes.information}>
                            <div><span>Name: {i.name}</span></div>
                            <div><span>Status: {i.status ? true : 'In progress'}</span></div>
                            {/*<div><span>Country: {'i.location.countryName'}</span></div>*/}
                            {/*<div><span>City: {'i.location.city'}</span></div>*/}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}